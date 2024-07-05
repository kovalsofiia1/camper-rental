import React from 'react'
import css from './ReviewsList.module.css';
import Review from '../Review/Review';

export default function ReviewsList({reviews}) {
  return (
    <div className={css.list}>
      {reviews.map((review, index) => (
        <Review key={ index } review={review}/>
      ))}
    </div>
  )
}
