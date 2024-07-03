
import css from './CamperItem.module.css'
import spritePath from '../../assets/icons/icons.svg';
import CamperFeature from '../CamperFeature/CamperFeature';



const handleDetails = (details) => {
    const resDetails = {
        adults: details["adults"],
        children: details["children"],
        engine: details['engine'],
        transmission: details['transmission'],
        form: details['form'],
        ...details['details']
    }

    const result = {}
    
    Object.keys(resDetails).forEach((key) => {
        if (['engine', 'form', 'transmission'].includes(key)) {
            result[resDetails[key]] = 1
        }
        else {
            result[key] = resDetails[key]
        }
    })

    console.log(' result ',result);
    return result

}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
    
const getKey = (key) => {
    const exceptions = {
        'airConditioner': 'Air conditioner',
        'panelTruck': 'Panel truck',
        'fullyIntegrated': 'Fully integrated'
    }

    return key in exceptions ? exceptions[key] : capitalizeFirstLetter(key) 
}
export default function CamperItem({ camper }) {
    
    const features = handleDetails(camper);
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
                                className={css.icon}
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
                  {Object.keys(features).map((key) => (
                      features[key]!==0 && <CamperFeature icon={key} key={key} text={`${features[key]!==1 ? features[key]: ''} ${getKey(key)}`} />
                    ))}
              </div>
              <button>Show more</button>
        </div>
    </div>
  )
}
