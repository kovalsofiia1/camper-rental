import css from './CamperFeature.module.css';
import spritePath from '../../assets/icons/icons.svg';



export default function CamperFeature({ icon, text }) {

  return (
    <div className={css.featureItem}>
      <svg
            className={css.icon}
            width="16"
            height="16"
            aria-label="btn icon"
        >
            <use href={`${spritePath}#icon-${icon}`} />
          </svg>
        <p>{text}</p>
    </div>
  )
}
