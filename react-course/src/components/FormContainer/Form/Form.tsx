import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormData, InputName, SwitcherValue } from 'types/types';
import Input from '../Input';
import { errorMessages, inputNames, switcherFieldName } from './constants';

import './Form.scss';

const Form = ({ onFormFill }: { onFormFill: (data: Record<string, string>) => void }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<FormData>();

  const memoizedRegister = useCallback(register, [register]);

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

    onFormFill(formData);
    reset();
  };

  const inputs = inputNames.map((inputName) => {
    return (
      <label key={inputName}>
        <Input name={inputName} register={memoizedRegister} />
        {errors[inputName] && <span className="error-message">{errorMessages[inputName]}</span>}
      </label>
    );
  });

  const isDisabled = Boolean(!isDirty || Object.keys(errors).length);
  return (
    <form className="form-page__form" onSubmit={handleSubmit(onSubmit)} name="form">
      {inputs}
      <input type="submit" value="submit" disabled={isDisabled} />
    </form>
  );
};

export default Form;
