import { CharactersContext } from 'context/CharactersState';
import React, { useContext } from 'react';
import { CharactersActionType, Sorting } from 'types/types';
import { paginationLimits, sortings } from './constants';

import './Pagination.scss';

const Pagination = () => {
  const {
    state: { currentPage, limit, pages, sorting },
    dispatch,
  } = useContext(CharactersContext);

  const OptionsForPages = (count: number) => {
    const options = [];
    for (let i = 1; i <= count; i++) {
      options.push(
        <option value={i} key={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'currentPage':
        dispatch({
          type: CharactersActionType.SET_CURRENT_PAGE,
          payload: value,
        });
        break;
      case 'limit':
        dispatch({
          type: CharactersActionType.SET_LIMIT,
          payload: value,
        });
        break;
      case 'sorting':
        dispatch({
          type: CharactersActionType.SET_SORTING,
          payload: value as Sorting,
        });
    }
  };

  const onClick = (variant: 'increase' | 'decrease') => {
    switch (variant) {
      case 'increase':
        dispatch({
          type: CharactersActionType.SET_CURRENT_PAGE,
          payload: String(Number(currentPage) + 1),
        });
        break;
      default:
        dispatch({
          type: CharactersActionType.SET_CURRENT_PAGE,
          payload: String(Number(currentPage) - 1),
        });
    }
  };

  return (
    <>
      <div className="pagination">
        <div className="pagination__item">
          <button onClick={() => onClick('decrease')} disabled={currentPage === '1'}>
            {'<<'}
          </button>
          <span>page</span>
          <select name="currentPage" value={currentPage} onChange={onChange}>
            {OptionsForPages(Number(pages))}
          </select>
          <span>of {pages}</span>
          <button onClick={() => onClick('increase')} disabled={currentPage === pages}>
            {'>>'}
          </button>
        </div>

        <div className="pagination__item">
          <span>limit per page</span>
          <select name="limit" defaultValue={limit} onChange={onChange}>
            {paginationLimits.map((variant) => (
              <option value={variant} key={variant}>
                {variant}
              </option>
            ))}
          </select>
        </div>

        <div className="pagination__item">
          <span>sort</span>
          <select name="sorting" defaultValue={sorting} onChange={onChange}>
            {sortings.map((variant) => (
              <option value={variant} key={variant}>
                {variant}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Pagination;
