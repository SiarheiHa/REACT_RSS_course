import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from 'components/Header';
import { AboutPage, DetailPage, FormPage, MainPage, NotFoundPage } from 'components/pages';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchCharacters } from 'store/charactersSlice';
import './App.scss';

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

  return (
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
  );
}

export default App;
