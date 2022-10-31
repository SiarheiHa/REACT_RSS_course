import { CharactersAction, CharactersActionType, CharactersStateType } from 'types/types';

export const charactersReducer = (state: CharactersStateType, action: CharactersAction) => {
  console.log(action);
  switch (action.type) {
    case CharactersActionType.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case CharactersActionType.SET_LIMIT:
      return {
        ...state,
        currentPage: '1',
        limit: action.payload,
      };
    case CharactersActionType.SET_SORTING:
      return {
        ...state,
        sorting: action.payload,
      };
    case CharactersActionType.SET_SEARCH:
      return {
        ...state,
        searchValue: action.payload,
        currentPage: '1',
      };
    case CharactersActionType.SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload.docs,
        pages: String(action.payload.pages),
        status: { loading: false, error: false },
      };
    case CharactersActionType.SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
