import Header from 'components/Header';
import { AboutPage, FormPage, MainPage, NotFoundPage } from 'components/pages';
import { FormState } from './context';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <FormState>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to={'/404'} replace />} />
        </Routes>
      </main>
    </FormState>
  );
}

export default App;
