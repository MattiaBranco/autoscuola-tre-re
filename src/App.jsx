import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PatenteDetail from './pages/PatenteDetail';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patente/:id" element={<PatenteDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
