import React from 'react';
import { FormProps, FormRefs, FormState, InputErrors, InputName, SwitcherValue } from 'types/types';
import {
  checkboxText,
  countryList,
  errorMassages,
  inputNames,
  switcherFieldName,
} from './constants';

import './Form.scss';

class Form extends React.Component<FormProps, FormState> {
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
    e.preventDefault();
    this.validateForm();
  };

  onChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    // console.log('onChange', e.currentTarget.name);
    // console.log('onChange', e.currentTarget.value);
    //TODO валидировать значение инпута, который сработал.
    // Если валидация успешна, обновить значение inputErrors

    // сделать какую-то проверку на InputName
    const name = e.currentTarget.name as InputName;

    const toggleSubmit = () => {
      console.log('foo' + !this.hasFormErrors());
      if (!this.hasFormErrors()) {
        console.log('foo2' + !this.hasFormErrors());
        this.setState({ isSubmitDisabled: false });
      }
    };

    if (this.state.inputErrors[name]) {
      this.setState(({ inputErrors }) => {
        return {
          inputErrors: { ...inputErrors, [name]: false },
        };
      }, toggleSubmit);
    }

    if (!this.hasFormErrors()) {
      this.setState({ isSubmitDisabled: false });
    }
  };

  validateForm() {
    const newInputErrors = inputNames.reduce((acc: InputErrors, name) => {
      acc[name] = !this.isInputValueValid(name);
      return acc;
    }, {});

    this.setState(
      {
        inputErrors: newInputErrors,
        isSubmitDisabled: true,
      },
      () => {
        if (!this.hasFormErrors()) {
          console.log('no erorrs');
          this.submitFormData();
          this.resetForm();
        }
      }
    );
  }

  submitFormData() {
    const data = this.getInputsData();
    this.props.onFormFill(data);
  }

  resetForm() {
    Object.values(this.formRefs).forEach((ref) => {
      const element = ref.current;
      if (element instanceof HTMLInputElement && element.type === 'checkbox') {
        element.checked = false;
      } else if (element) {
        element.value = '';
      }
    });

    this.setState({
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
    });
  }

  getInputsData() {
    const data = Object.values(this.formRefs).reduce((acc: Record<string, string | File>, ref) => {
      if (!ref.current) return acc;
      const { name } = ref.current;
      if (!name || ref.current.name === InputName.checkbox) return acc;
      if (name === InputName.switcher && ref.current instanceof HTMLInputElement) {
        acc[switcherFieldName] = ref.current.checked ? SwitcherValue.right : SwitcherValue.left;
        return acc;
      }
      if (name === InputName.file && ref.current instanceof HTMLInputElement && ref.current.files) {
        acc[name] = ref.current.files[0];
        return acc;
      }
      acc[name] = ref.current.value;
      return acc;
    }, {});
    return data;
  }

  isInputValueValid(name: InputName) {
    const element = this.formRefs[name].current;
    if (!element) return;
    const value = element.value;
    switch (name) {
      case InputName.name:
      case InputName.surname:
        return Boolean(value.match(/^[A-zА-я]{2,}/i));
        break;
      case InputName.birthday:
      case InputName.location:
        // if (name === InputName.file)
        //   console.log((element as HTMLInputElement).files![0], 'value' + value);
        return Boolean(value);
        break;
      case InputName.checkbox:
        if (element instanceof HTMLInputElement) {
          return element.checked;
        }
        break;
      case InputName.switcher:
        return true;
        break;
      case InputName.file:
        return Boolean((element as HTMLInputElement).files?.length);
        break;
      default:
        return false;
    }
  }

  hasFormErrors() {
    return Object.values(this.state.inputErrors).some((value) => value);
  }

  hasInputError(name: InputName) {
    return this.state.inputErrors[name];
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
            <input type="checkbox" {...props} />
          </>
        );
      case InputName.switcher:
        return (
          <label className="switcher">
            <span className="switcher__text">{SwitcherValue.left}</span>
            <input type="checkbox" {...props} />
            <span className="switcher__text">{SwitcherValue.right}</span>
          </label>
        );
      case InputName.file:
        return (
          <>
            <span className="label__title">Avatar</span>
            <input type="file" accept=".png, .jpg, .jpeg" {...props} />
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
    const inputs = inputNames.map((inputName) => {
      const errorMessage = this.hasInputError(inputName) ? errorMassages[inputName] : null;

      return (
        <label key={inputName}>
          {this.createInput(inputName)}
          <span className="error-message">{errorMessage}</span>
        </label>
      );
    });

    return (
      <form className="form-page__form" onSubmit={this.onSubmit}>
        {inputs}
        <input type="submit" value="submit" disabled={this.state.isSubmitDisabled} />
      </form>
    );
  }
}

export default Form;
