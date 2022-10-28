import Header from 'components/Header';
import { AboutPage, FormPage, MainPage, NotFoundPage } from 'components/pages';
import { AppState } from 'context';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <AppState>
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
    </AppState>
  );
}

export default App;
