import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CardData, FormData, FormStateType } from 'types/types';

const initialFormState: FormStateType = {
  cards: [],
  inputsValues: null,
  hasFormErrors: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState: initialFormState,
  reducers: {
    addCard(state, action: PayloadAction<CardData>) {
      state.cards.push(action.payload);
      state.inputsValues = null;
      state.hasFormErrors = false;
    },
    saveInputsValues(state, action: PayloadAction<FormData>) {
      state.inputsValues = action.payload;
    },
    setErrors(state) {
      state.hasFormErrors = true;
    },
  },
});

export const { addCard, saveInputsValues, setErrors } = formSlice.actions;
export default formSlice.reducer;
