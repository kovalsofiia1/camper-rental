import React from 'react'
import css from './CamperItem.module.css'

export default function CamperItem({camper}) {
  return (
    <div>
        <div className={css.imgContainer}>
              <img src="" alt="" />
        </div>
          
          <div className={css.descriptionContainer}>
              <div className={css.mainContainer}>
                  <h2 className={css.title}>Mavericks</h2>
                    <div className={css.details}>
                        <h3 className={css.price}>$8000,00</h3>
                    </div>
              </div>
              <div className={css.secondaryContainer}>
                  
              </div>

              <p className={css.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium id dicta molestias nulla natus a! Error porro quidem eius voluptate nostrum sequi blanditiis sed, nesciunt maxime aspernatur consequatur, aliquid explicabo?</p>
              <div className={css.features}>
                  <ul className={css.featuresList}>
                      <li className={css.featureItem}>2 adults</li>
                      <li className={css.featureItem}>Automatic</li>
                      <li className={css.featureItem}>Petrol</li>
                      <li className={css.featureItem}>kitchen</li>
                      <li className={css.featureItem}>3 beds</li>
                      <li className={css.featureItem}>AC</li>
                  </ul>
              </div>
              <button>Show more</button>
        </div>
    </div>
  )
}
