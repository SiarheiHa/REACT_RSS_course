import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormData, InputName, SwitcherValue } from 'types/types';
import {
  checkboxText,
  countryList,
  errorMessages,
  inputNames,
  switcherFieldName,
} from './constants';

import './Form.scss';

const Form = ({ onFormFill }: { onFormFill: (data: Record<string, string>) => void }) => {
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

    onFormFill(formData);
    reset();
  };

  const createInput = (name: InputName) => {
    switch (name) {
      case InputName.birthday:
        return (
          <>
            <span className="label__title">birthday</span>
            <input
              type="date"
              {...register(name, {
                required: true,
              })}
            />
          </>
        );
      case InputName.location:
        return (
          <>
            <span className="label__title">location</span>
            <select
              defaultValue={''}
              {...register(name, {
                required: true,
              })}
            >
              <option value="" disabled></option>
              {countryList.map((contry) => (
                <option key={contry}>{contry}</option>
              ))}
            </select>
          </>
        );
      case InputName.checkbox:
        return (
          <>
            <span className="label__title">{checkboxText}</span>
            <input
              type="checkbox"
              {...register(name, {
                required: true,
              })}
            />
          </>
        );
      case InputName.switcher:
        return (
          <label className="switcher">
            <span className="switcher__text">{SwitcherValue.left}</span>
            <input type="checkbox" {...register(name)} />
            <span className="switcher__text">{SwitcherValue.right}</span>
          </label>
        );
      case InputName.file:
        return (
          <>
            <span className="label__title">Avatar</span>
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              {...register(name, {
                required: true,
              })}
            />
          </>
        );
      default:
        return (
          <>
            <span className="label__title">{name}</span>
            <input
              type="text"
              {...register(name, {
                required: true,
                minLength: 2,
                pattern: /^[A-Za-z-А-Яа-я]+$/i,
              })}
            />
          </>
        );
    }
  };

  const inputs = inputNames.map((inputName) => {
    return (
      <label key={inputName}>
        {createInput(inputName)}
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
