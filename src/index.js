import React from 'react';
import DetailPage from './components/DetailPage';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ThemeProvider from './Theme';

render(
  <ThemeProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:id" element={<DetailPage />} />
    </Routes>
  </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

