import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppState } from 'context';
import React from 'react';
import FormContainer from './FormContainer';

describe('FormContainer', () => {
  it('FormContainer renders', () => {
    render(<FormContainer />);
    expect(screen.getByTestId('form-container')).toBeInTheDocument();
  });

  it('The card is rendered after submitting the correct form', async () => {
    global.URL.createObjectURL = jest.fn();
    render(
      <AppState>
        <FormContainer />
      </AppState>
    );

    const nameInput = screen.getByLabelText('name');
    expect(nameInput).toBeInTheDocument();
    userEvent.type(nameInput, 'testname');
    expect(nameInput).toHaveDisplayValue('testname');

    const surnameInput = screen.getByLabelText('surname');
    expect(surnameInput).toBeInTheDocument();
    userEvent.type(surnameInput, 'testSurname');
    expect(surnameInput).toHaveDisplayValue('testSurname');

    const birthdayInput = screen.getByLabelText('birthday');
    expect(birthdayInput).toBeInTheDocument();
    fireEvent.change(birthdayInput, { target: { value: '2000-01-01' } });
    expect(birthdayInput).toHaveDisplayValue('2000-01-01');

    const locationInput = screen.getByLabelText('location');
    expect(locationInput).toBeInTheDocument();
    userEvent.selectOptions(locationInput, ['Belarus']);
    expect(locationInput).toHaveDisplayValue('Belarus');

    const checkbox = screen.getByLabelText('I agree to create a card');
    expect(checkbox).toBeInTheDocument();
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    const imageInput = screen.getByLabelText('Avatar') as HTMLInputElement;
    expect(imageInput).toBeInTheDocument();
    const file = new File(['test'], 'test.png', { type: 'image/png' });
    Object.defineProperty(imageInput, 'value', {
      value: './test.png',
    });
    userEvent.upload(imageInput, file);
    expect(imageInput.files![0]).toStrictEqual(file);

    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument();
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId('form-card')).toBeInTheDocument();
    });
  });
});
