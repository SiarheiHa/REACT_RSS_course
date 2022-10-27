import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { InputName, FormData, SwitcherValue } from 'types/types';
import { countryList, checkboxText } from '../Form/constants';

const Input = ({ name, register }: { name: InputName; register: UseFormRegister<FormData> }) => {
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

export default Input;
