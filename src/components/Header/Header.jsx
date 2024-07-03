import React from 'react';
import { Link } from "react-router-dom";
import css from './Header.module.css';

export default function Header() {
  return (
    <div className={css.header}>
      <nav>
        <ul className={css.navigation}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
