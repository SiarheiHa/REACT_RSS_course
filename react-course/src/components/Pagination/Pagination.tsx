import { CharactersContext } from 'context/CharactersState';
import React, { useContext } from 'react';
import { CharactersActionType, CharactersStateType } from 'types/types';
import { paginationLimits, sortings } from './constants';

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
    console.log(name, 'value', value);
    switch (name) {
      case 'currentPage':
        dispatch({
          type: CharactersActionType.SET_CURRENT_PAGE,
          payload: value,
        });
    }
    // dispatch({
    //   type: CharactersActionType.SET_PAGINATION,
    //   payload: { [name]: value } as unknown as Record<keyof CharactersStateType, string>,
    // });
  };

  return (
    <div className="pagination">
      <p>pagination</p>
      <span>page</span>
      <select name="currentPage" defaultValue={currentPage} onChange={onChange}>
        {OptionsForPages(Number(pages))}
      </select>
      <span>of {pages}</span>

      <span>limit per page</span>
      <select name="limit" defaultValue={limit} onChange={onChange}>
        {paginationLimits.map((variant) => (
          <option value={variant} key={variant}>
            {variant}
          </option>
        ))}
      </select>

      <span>sort by</span>
      <select name="sorting" defaultValue={sorting} onChange={onChange}>
        {sortings.map((variant) => (
          <option value={variant} key={variant}>
            {variant}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pagination;
