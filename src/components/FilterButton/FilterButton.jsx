import React from 'react'
import css from './FilterButton.module.css';
import spritePath from '../../assets/icons/icons.svg';

export default function FilterButton({action}) {
  return (
    <div>
        <button className={css.btn} onClick={action}>
            <svg
            className={css.icon}
            width="20"
            height="20"
            aria-label={`pin icon`}
            >
            <use href={`${spritePath}#icon-filter`} /> 
            </svg>
        </button>
    </div>
  )
}
