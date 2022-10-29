import { AppContext } from 'context/AppState';
import React, { useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ActionType, FormData, InputName, SwitcherValue } from 'types/types';
import Input from '../Input';
import { errorMessages, inputNames, switcherFieldName } from './constants';

import './Form.scss';

const Form = () => {
  const {
    state: { inputsValues, fieldsWithErrors },
    dispatch,
  } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isSubmitSuccessful },
    getValues,
    setValue,
    setError,
    trigger,
  } = useForm<FormData>();

  //сохраняет в контекст данные инпутов при анмаунте
  useEffect(() => {
    console.log('effect');
    return () => {
      console.log('return');
      dispatch({
        type: ActionType.SAVE_INPUT_VALUES,
        payload: getValues(),
      });
    };
  }, [dispatch, getValues]);

  // сохранение ошибок
  useEffect(() => {
    return () => {
      dispatch({
        type: ActionType.SAVE_ERRORS,
        payload: Object.keys(errors) as InputName[],
      });
    };
  }, [dispatch, errors]);

  // устаналивает ошибки
  useEffect(() => {
    if (fieldsWithErrors.length) {
      // fieldsWithErrors.forEach((key) => {
      //   setError(key, {});
      // });
      console.log('trigger');
      trigger();
    }
  }, [fieldsWithErrors, setError]);

  // сброс формы при успешном сабмите
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  // устанавливает значения в инпуты
  useEffect(() => {
    if (inputsValues) {
      inputNames.forEach((key) => {
        setValue(key, inputsValues[key]);
      });
    }
  }, [inputsValues, setValue]);

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

    dispatch({
      type: ActionType.ADD_CARD,
      payload: formData,
    });
  };

  const onChange = () => {
    if (Object.keys(errors).length) {
      console.log('trigger onChange');
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
