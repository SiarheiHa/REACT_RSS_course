import { AppContext } from 'context/AppState';
import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ActionType, FormData, InputName, SwitcherValue } from 'types/types';
import Input from '../Input';
import { errorMessages, inputNames, switcherFieldName } from './constants';

import './Form.scss';

const Form = () => {
  const { state, dispatch } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const formData = Object.entries(data).reduce((acc: Record<string, string>, [key, value]) => {
      if (key === InputName.switcher) {
        acc[switcherFieldName] = value ? SwitcherValue.right : SwitcherValue.left;
      } else if (key === InputName.file) {
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

    // onFormFill(formData);
    reset();
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
    <form className="form-page__form" onSubmit={handleSubmit(onSubmit)} name="form">
      {inputs}
      <input type="submit" value="submit" disabled={isDisabled} />
    </form>
  );
};

export default Form;
