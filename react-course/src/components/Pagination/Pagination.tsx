// import { CharactersContext } from 'context/CharactersState';
import { useAppDispatch, useAppSelector } from 'store';
import React from 'react';
import { Sorting } from 'types/types';
import { paginationLimits, sortings } from './constants';

import './Pagination.scss';
import { setCurrentPage, setLimit, setSorting } from 'store/charactersSlice';

const Pagination = () => {
  const { currentPage, limit, pages, sorting } = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();

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
        dispatch(setCurrentPage(value));
        break;
      case 'limit':
        dispatch(setLimit(value));
        break;
      case 'sorting':
        dispatch(setSorting(value as Sorting));
    }
  };

  const onClick = (variant: 'increase' | 'decrease') => {
    switch (variant) {
      case 'increase':
        dispatch(setCurrentPage(String(Number(currentPage) + 1)));
        break;
      default:
        dispatch(setCurrentPage(String(Number(currentPage) - 1)));
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
