import React from 'react';
import { FormRefs, FormState, InputNames } from 'types/types';

import './Form.scss';

const inputNames: Array<InputNames> = [
  InputNames.name,
  InputNames.surname,
  InputNames.birthday,
  InputNames.location,
  InputNames.checkbox,
  InputNames.switcher,
  InputNames.file,
];

class Form extends React.Component<Record<string, never>, FormState> {
  state = {
    isSubmitDisabled: false,
  };

  formRefs: FormRefs = {
    name: React.createRef(),
    surname: React.createRef(),
    birthday: React.createRef(),
    location: React.createRef(),
    checkbox: React.createRef(),
    switcher: React.createRef(),
    file: React.createRef(),
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('onSubmit', e);
    e.preventDefault();
  };

  onChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    console.log('onChange', e.currentTarget.name);
  };

  createInput(name: InputNames) {
    const props = {
      name: name,
      ref: this.formRefs[name] as React.RefObject<HTMLInputElement>,
      onChange: this.onChange,
    };

    switch (name) {
      case InputNames.birthday:
        return (
          <>
            <span className="label__title">birthday</span>
            <input type="date" {...props} />
          </>
        );
      case InputNames.location:
        return (
          <>
            <span className="label__title">location</span>
            <select
              name={InputNames.location}
              defaultValue={''}
              ref={this.formRefs.location}
              onChange={this.onChange}
            >
              <option value="" disabled></option>
              <option>country1</option>
              <option>country2</option>
              <option>country3</option>
              <option>country4</option>
              <option>country5</option>
              <option>country6</option>
            </select>
          </>
        );
      case InputNames.checkbox:
        return (
          <>
            <span className="label__title">Are you agree?</span>
            <input type="checkbox" {...props} />
          </>
        );
      case InputNames.switcher:
        return (
          <label className="switcher">
            <span className="switcher__text">left</span>
            <input type="checkbox" {...props} />
            <span className="switcher__text">right</span>
          </label>
        );
      case InputNames.file:
        return (
          <>
            <span className="label__title">Avatar</span>
            <input type="file" {...props} />
          </>
        );
      default:
        return (
          <>
            <span className="label__title">{name}</span>
            <input type="text" {...props} />
          </>
        );
    }
  }

  render() {
    const inputs = inputNames.map((inputName) => (
      <label key={inputName}>{this.createInput(inputName)}</label>
    ));

    return (
      <form className="form-page__form" onSubmit={this.onSubmit}>
        {inputs}
        <input type="submit" value="submit" disabled={this.state.isSubmitDisabled} />
      </form>
    );
  }
}

export default Form;
