import { FormAction, FormActionType, FormStateType } from 'types/types';

export const formReducer = (state: FormStateType, action: FormAction) => {
  switch (action.type) {
    case FormActionType.ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
        inputsValues: null,
        hasFormErrors: false,
      };
    case FormActionType.SAVE_INPUT_VALUES:
      return {
        ...state,
        inputsValues: action.payload,
      };
    case FormActionType.SAVE_ERRORS:
      return {
        ...state,
        hasFormErrors: true,
      };
    default:
      return state;
  }
};
