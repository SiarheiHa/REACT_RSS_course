import React from 'react';
import { FormRefs, FormState, InputName } from 'types/types';

import './Form.scss';

const inputNames: Array<InputName> = [
  InputName.name,
  InputName.surname,
  InputName.birthday,
  InputName.location,
  InputName.checkbox,
  InputName.switcher,
  InputName.file,
];

class Form extends React.Component<Record<string, never>, FormState> {
  state = {
    isSubmitDisabled: true,
    inputErrors: {
      name: false,
      surname: false,
      birthday: false,
      location: false,
      checkbox: false,
      switcher: false,
      file: false,
    },
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
    if (this.hasFormErrors()) {
      this.setState({ isSubmitDisabled: true });
    }
  };

  onChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    // console.log('onChange', e.currentTarget.name);
    // console.log('onChange', e.currentTarget.value);
    //TODO валидировать значение инпута, который сработал.
    // Если валидация успешна, обновить значение inputErrors

    // сделать какую-то проверку на InputName
    const name = e.currentTarget.name as InputName;

    // console.log(this.state.inputErrors);
    this.validateInputValue(name);
    // console.log(this.state.inputErrors);

    this.setState({ isSubmitDisabled: false });
    if (this.hasFormErrors()) {
      this.setState({ isSubmitDisabled: true });
    }
  };

  validateInputValue(name: InputName) {
    const element = this.formRefs[name].current;
    if (!element) return;
    const value = element.value;
    let isError: boolean;
    // if (element instanceof HTMLInputElement) {
    //   const checked = element.checked;
    //   // console.log(cheked);
    // }
    console.log(name);
    switch (name) {
      case InputName.name:
        isError = value.length < 2;
        break;
      case InputName.surname:
        isError = value.length < 2;
        break;
      // case InputName.birthday:
      // case InputName.location:
      // case InputName.checkbox:
      // case InputName.switcher:
      // case InputName.file:
      default:
        return;
    }

    if (this.state.inputErrors[name] === isError) return;

    this.setState(({ inputErrors }) => {
      const newInputErrors = { ...inputErrors, [name]: isError };
      return {
        inputErrors: { ...newInputErrors },
      };
    });
  }

  hasFormErrors() {
    return Object.values(this.state.inputErrors).some((value) => value);
  }

  createInput(name: InputName) {
    const props = {
      name: name,
      ref: this.formRefs[name] as React.RefObject<HTMLInputElement>,
      onChange: this.onChange,
    };

    switch (name) {
      case InputName.birthday:
        return (
          <>
            <span className="label__title">birthday</span>
            <input type="date" {...props} />
          </>
        );
      case InputName.location:
        return (
          <>
            <span className="label__title">location</span>
            <select
              name={InputName.location}
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
      case InputName.checkbox:
        return (
          <>
            <span className="label__title">Are you agree?</span>
            <input type="checkbox" {...props} />
          </>
        );
      case InputName.switcher:
        return (
          <label className="switcher">
            <span className="switcher__text">left</span>
            <input type="checkbox" {...props} />
            <span className="switcher__text">right</span>
          </label>
        );
      case InputName.file:
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
