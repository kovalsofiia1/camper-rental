import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Header from '../Header/Header';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <Header />
      <div className={css.page}>
        <Outlet />
      </div>
    </>
  )
}
