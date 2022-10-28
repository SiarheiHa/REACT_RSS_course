import { Action, ActionType, AppStateType } from 'types/types';

export const appReducer = (state: AppStateType, action: Action) => {
  console.log(action);
  switch (action.type) {
    case ActionType.ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };

    default:
      return state;
  }
};
