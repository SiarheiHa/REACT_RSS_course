// import { FormContext } from 'context/FormState';
import React, { useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'store';
import { addCard, saveInputsValues, setErrors } from 'store/formSlice';
import { FormActionType, FormData, InputName, SwitcherValue } from 'types/types';
import Input from '../Input';
import { emptyInputValues, errorMessages, inputNames, switcherFieldName } from './constants';

import './Form.scss';

const Form = () => {
  const { inputsValues, hasFormErrors } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isSubmitSuccessful },
    getValues,
    trigger,
  } = useForm<FormData>({ defaultValues: inputsValues || {} });

  //сохраняет в контекст данные инпутов при анмаунте
  useEffect(() => {
    return () => {
      dispatch(saveInputsValues({ ...getValues(), file: null }));
    };
  }, [dispatch, getValues]);

  // сохранение флага наличия ошибок в контекст
  useEffect(() => {
    return () => {
      if (Object.keys(errors).length) {
        dispatch(setErrors());
      }
    };
  }, [dispatch, errors]);

  // тригеррит валидацию если ошибки есть в контексте
  useEffect(() => {
    if (hasFormErrors) {
      trigger();
    }
  }, [hasFormErrors, trigger]);

  // сброс формы при успешном сабмите
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(emptyInputValues);
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const formData = Object.entries(data).reduce((acc: Record<string, string>, [key, value]) => {
      if (key === InputName.switcher) {
        acc[switcherFieldName] = value ? SwitcherValue.right : SwitcherValue.left;
      } else if (key === InputName.file && data.file) {
        acc[key] = URL.createObjectURL(data.file[0]);
      } else if (typeof value === 'string') {
        acc[key] = value;
      }
      return acc;
    }, {});

    dispatch(addCard(formData));
  };

  const onChange = () => {
    if (Object.keys(errors).length) {
      trigger();
    }
  };

  const inputs = inputNames.map((inputName) => {
    return (
      <label key={inputName}>
        <Input name={inputName} register={register} />
        {errors[inputName] && <span className="error-message">{errorMessages[inputName]}</span>}
      </label>
    );
  });

  const isDisabled = !!(!isDirty || Object.keys(errors).length);

  return (
    <form
      className="form-page__form"
      onSubmit={handleSubmit(onSubmit)}
      onChange={onChange}
      name="form"
    >
      {inputs}
      <input type="submit" value="submit" disabled={isDisabled} />
    </form>
  );
};

export default Form;
