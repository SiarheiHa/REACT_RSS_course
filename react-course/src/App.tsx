import Header from 'components/Header';
import { AboutPage, DetailPage, FormPage, MainPage, NotFoundPage } from 'components/pages';
// import { FormState } from './context';
import React, { useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ResponseModel, CharactersActionType } from 'types/types';
// import { CharactersContext } from 'context/CharactersState';
import Api from 'api';
import './App.scss';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchCharacters } from 'store/charactersSlice';

const api = new Api();

function App() {
  const dispatch = useAppDispatch();
  const {
    currentPage: page,
    limit,
    sorting,
    searchValue,
  } = useAppSelector((state) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters({ page, limit, sorting, searchValue }));
  }, [page, limit, sorting, searchValue, dispatch]);

  // const {
  //   state: { currentPage, limit, sorting, searchValue },
  //   dispatch,
  // } = useContext(CharactersContext);

  // useEffect(() => {
  //   const onCharactersLoaded = (data: ResponseModel) => {
  //     dispatch({
  //       type: CharactersActionType.SET_CHARACTERS,
  //       payload: data,
  //     });
  //   };

  //   const onError = () => {
  //     dispatch({
  //       type: CharactersActionType.SET_STATUS,
  //       payload: { loading: false, error: true },
  //     });
  //   };

  //   api
  //     .getPaginatedData(currentPage, limit, sorting, searchValue)
  //     .then(onCharactersLoaded)
  //     .catch(onError);

  //   dispatch({
  //     type: CharactersActionType.SET_STATUS,
  //     payload: { loading: true, error: false },
  //   });
  // }, [currentPage, limit, sorting, searchValue, dispatch]);

  return (
    // <FormState>
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/characters/:id" element={<DetailPage />} />
          <Route path="*" element={<Navigate to={'/404'} replace />} />
        </Routes>
      </main>
    </>
    // </FormState>
  );
}

export default App;
