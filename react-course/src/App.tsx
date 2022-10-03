import Header from 'components/Header';
import { AboutPage, MainPage, NotFoundPage } from 'components/pages';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to={'/404'} replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
