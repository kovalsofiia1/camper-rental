import React from 'react';
import { NavLink } from "react-router-dom";
import css from './Header.module.css';
import img from '../../assets/img/logo.png'
export default function Header() {
  return (
    <div className={css.header}>
      <div className={css.logoContainer}>
        <img src={img} alt="logo" width="48px" height="48px" />
        <h2 className={css.title}>GoCampers</h2>
      </div>
      <nav>
        <ul className={css.navigation}>
          <li>
            <NavLink to="/" className={css.link}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className={css.link}>Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className={css.link}>Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
