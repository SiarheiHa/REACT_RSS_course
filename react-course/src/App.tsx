import Header from 'components/header';
import { AboutPage, MainPage, NotFoundPage } from 'components/pages';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
