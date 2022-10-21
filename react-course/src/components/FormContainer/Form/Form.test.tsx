import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { errorMessages } from './constants';
import Form from './Form';

describe('Form', () => {
  const onFormfillMock = jest.fn();
  beforeEach(() => {
    render(<Form onFormFill={onFormfillMock} />);
  });

  it('Form renders', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('nameInput works', () => {
    const nameInput = screen.getByLabelText('name');
    expect(nameInput).toBeInTheDocument();
    userEvent.type(nameInput, 'testname');
    expect(nameInput).toHaveDisplayValue('testname');
  });

  it('surNameInput works', () => {
    const surnameInput = screen.getByLabelText('surname');
    expect(surnameInput).toBeInTheDocument();
    userEvent.type(surnameInput, 'testsurname');
    expect(surnameInput).toHaveDisplayValue('testsurname');
  });

  it('birthdayInput works', () => {
    const birthdayInput = screen.getByLabelText('birthday');
    expect(birthdayInput).toBeInTheDocument();
    userEvent.type(birthdayInput, '2000-01-01');
    expect(birthdayInput).toHaveDisplayValue('2000-01-01');
  });

  it('locationInput works', () => {
    const locationInput = screen.getByLabelText('location');
    expect(locationInput).toBeInTheDocument();
    userEvent.selectOptions(locationInput, ['Belarus']);
    expect(locationInput).toHaveDisplayValue('Belarus');
  });

  it('checkbox works', () => {
    const checkbox = screen.getByLabelText('I agree to create a card');
    expect(checkbox).toBeInTheDocument();
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('imageInput works', () => {
    const imageInput = screen.getByLabelText('Avatar') as HTMLInputElement;
    expect(imageInput).toBeInTheDocument();
    const file = new File(['test'], 'test.png', { type: 'image/png' });
    userEvent.upload(imageInput, file);
    expect(imageInput.files![0]).toStrictEqual(file);
  });

  it('submitButton renders and disabled', () => {
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  it('submitButton are not disabled after first input', () => {
    const submitButton = screen.getByRole('button');
    const nameInput = screen.getByLabelText('name');
    userEvent.type(nameInput, 't');
    expect(submitButton).not.toBeDisabled();
  });

  it('Error messages are displayed if the form is incomplete, submit is disable', () => {
    const submitButton = screen.getByRole('button');
    const nameInput = screen.getByLabelText('name');
    userEvent.type(nameInput, 't');
    userEvent.click(submitButton);
    Object.values(errorMessages).forEach((message) => {
      expect(screen.getByText(message)).toBeInTheDocument();
    });
    expect(submitButton).toBeDisabled();
  });

  it('Error message hides after typing', () => {
    const submitButton = screen.getByRole('button');
    const nameInput = screen.getByLabelText('surname');
    userEvent.type(nameInput, 't');
    userEvent.click(submitButton);
    expect(screen.getByText(errorMessages.surname)).toBeInTheDocument();
    userEvent.type(nameInput, 'new text');
    expect(screen.queryByText(errorMessages.surname)).not.toBeInTheDocument();
  });

  it('submitButton are not disabled after correcting inputs', () => {
    const nameInput = screen.getByLabelText('name');
    const surnameInput = screen.getByLabelText('surname');
    const birthdayInput = screen.getByLabelText('birthday');
    const locationInput = screen.getByLabelText('location');
    const checkbox = screen.getByLabelText('I agree to create a card');
    const imageInput = screen.getByLabelText('Avatar') as HTMLInputElement;
    const submitButton = screen.getByRole('button');

    userEvent.type(nameInput, 't');
    userEvent.click(submitButton);

    expect(submitButton).toBeDisabled();

    userEvent.type(nameInput, 'testname');
    userEvent.type(surnameInput, 'testsurname');
    userEvent.type(birthdayInput, '2000-01-01');
    userEvent.selectOptions(locationInput, ['Belarus']);
    userEvent.click(checkbox);
    const file = new File(['test'], 'test.png', { type: 'image/png' });
    userEvent.upload(imageInput, file);

    expect(submitButton).not.toBeDisabled();
  });

  it('inputs are empty after submit, callback to be called', () => {
    global.URL.createObjectURL = jest.fn();
    const nameInput = screen.getByLabelText('name');
    const surnameInput = screen.getByLabelText('surname');
    const birthdayInput = screen.getByLabelText('birthday');
    const locationInput = screen.getByLabelText('location');
    const checkbox = screen.getByLabelText('I agree to create a card');
    const imageInput = screen.getByLabelText('Avatar') as HTMLInputElement;
    const submitButton = screen.getByRole('button');

    userEvent.type(nameInput, 'testname');
    userEvent.type(surnameInput, 'testsurname');
    userEvent.type(birthdayInput, '2000-01-01');
    userEvent.selectOptions(locationInput, ['Belarus']);
    userEvent.click(checkbox);
    const file = new File(['test'], 'test.png', { type: 'image/png' });
    userEvent.upload(imageInput, file);

    userEvent.click(submitButton);

    [nameInput, surnameInput, birthdayInput, locationInput, imageInput].forEach((input) => {
      expect(input).toHaveDisplayValue('');
    });
    expect(onFormfillMock).toBeCalled();
  });
});
