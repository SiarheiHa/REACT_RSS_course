import { CharactersAction, CharactersActionType, CharactersStateType } from 'types/types';

export const charactersReducer = (state: CharactersStateType, action: CharactersAction) => {
  console.log(action);
  switch (action.type) {
    case CharactersActionType.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
