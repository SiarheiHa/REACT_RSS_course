import React from 'react';

import './Form.scss';

class Form extends React.Component {
  render() {
    return (
      <form className="form-page__form">
        <label>
          <span className="label__title">name</span>
          <input type="text" name="name" />
        </label>

        <label>
          <span className="label__title">surname</span>
          <input type="text" name="surname" />
        </label>

        <label>
          <span className="label__title">birthday</span>
          <input type="date" name="text" />
        </label>

        <label>
          <span className="label__title">location</span>
          <select name="location">
            <option>country1</option>
            <option>country2</option>
            <option>country3</option>
            <option>country4</option>
            <option>country5</option>
            <option>country6</option>
          </select>
        </label>

        <label>
          <span className="label__title">Are you agree?</span>
          <input type="checkbox" name="agree-checkbox" />
        </label>

        <label className="switcher">
          <span className="switcher__text">left</span>
          <input type="checkbox" name="switcher" />
          <span className="switcher__text">right</span>
        </label>

        <label>
          <span className="label__title">Avatar</span>
          <input type="file" name="upload" />
        </label>

        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Form;
