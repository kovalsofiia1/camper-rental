// import { useState } from 'react'
// import ReactDOM from "react-dom/client";
// import { Suspense, lazy } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import './App.css'
// // import CatalogPage from '../../pages/CatalogPage/CatalogPage';
// // import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
// // import HomePage from '../../pages/HomePage/HomePage';
// import Layout from '../Layout/Layout';

// const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
// const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
// const FavoritesPage = lazy(() => import('../../pages/FavoritesPage/FavoritesPage'));

// function App() {

//   return (
//      <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           <Route path="catalog" element={<CatalogPage />} />
//           <Route path="favorites" element={<FavoritesPage />} />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Layout from '../Layout/Layout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('../../pages/FavoritesPage/FavoritesPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

