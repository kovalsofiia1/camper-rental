import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import HomePage from '../../pages/HomePage/HomePage';
import Layout from '../Layout/Layout';

function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
