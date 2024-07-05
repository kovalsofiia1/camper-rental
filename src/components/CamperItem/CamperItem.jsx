
import css from './CamperItem.module.css'
import spritePath from '../../assets/icons/icons.svg';
// import CamperFeature from '../CamperFeature/CamperFeature';
import CamperModal from '../CamperModal/CamperModal';
import { useState } from 'react';
import clsx from 'clsx';
// import { handleDetails } from './helpers/handleFeatures';
import FeaturesList from '../FeaturesList/FeaturesList';


export default function CamperItem({ camper }) {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleShowMore = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

  return (
    <div className={css.container}>
        <div className={css.imgContainer}>
              <img className={css.img} src={camper.gallery[0]} alt="camper"/>
        </div>
          
          <div className={css.descriptionContainer}>
              <div className={css.mainContainer}>
                  <h2 className={css.title}>{ camper.name }</h2>
                    <div className={css.details}>
                      <h3 className={css.title}>{ `$${camper.price},00`}</h3>
                      <button className={css.btn}>
                            <svg
                            className={css.icon}
                            width="24"
                            height="24"
                            aria-label="btn icon"
                            >
                            <use href={`${spritePath}#icon-heart`} />
                            </svg>
                        </button>
                    </div>
              </div>
              <div className={css.secondaryContainer}>
                  <div className={css.ratingContainer}>
                        <svg
                                className={clsx(css.icon, css.star)}
                                width="16"
                                height="16"
                                aria-label="btn icon"
                            >
                                <use href={`${spritePath}#icon-rating`} />
                        </svg>
                      <p className={css.rating}>{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
                    </div>
                  <div className={css.ratingContainer}>
                      <svg
                                className={css.icon}
                                width="16"
                                height="16"
                                aria-label="btn icon"
                            >
                                <use href={`${spritePath}#icon-map-pin`} />
                      </svg>
                      <p>{ camper.location}</p>
                </div>
              </div>

              <p className={css.description}>{ camper.description}</p>
              <div className={css.features}>
                  {/* {Object.keys(features).map((key) => (
                      features[key]!==0 && <CamperFeature icon={key} key={key} text={`${features[key]!==1 ? features[key]: ''} ${getKey(key)}`} />
                    ))} */}
                  <FeaturesList camper={ camper } />
              </div>
              
              <button onClick={handleShowMore}>Show more</button>
          </div>
          {isModalOpen && <CamperModal camper={camper} onClose={ handleCloseModal } />}
    </div>
  )
}
