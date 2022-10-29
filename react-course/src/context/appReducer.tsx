import { Action, ActionType, AppStateType } from 'types/types';

export const appReducer = (state: AppStateType, action: Action) => {
  console.log(action);
  switch (action.type) {
    case ActionType.ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
        inputsValues: null,
      };
    case ActionType.SAVE_INPUT_VALUES:
      return {
        ...state,
        inputsValues: action.payload,
      };
    case ActionType.SAVE_ERRORS:
      return {
        ...state,
        fieldsWithErrors: action.payload,
      };
    default:
      return state;
  }
};
