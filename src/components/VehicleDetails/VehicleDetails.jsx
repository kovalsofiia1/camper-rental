import css from './VehicleDetails.module.css';
import { getKey } from '../CamperItem/helpers/handleFeatures';

export default function VehicleDetails({camper}) {
  return (
    <div className={css.vehicleDetails}>
          <p className={css.titleDetails}>Vehicle details</p>
            <div className={css.separator}></div>
            <div className={css.detailsContainer}>
                <div className={css.detail}><span>Form</span><span>{getKey(camper.form)}</span></div>
                <div className={css.detail}><span>Length</span><span>{ camper.length }</span></div>
                <div className={css.detail}><span>Width</span><span>{ camper.width }</span></div>
                <div className={css.detail}><span>Height</span><span>{ camper.height }</span></div>
                <div className={css.detail}><span>Tank</span><span>{ camper.tank }</span></div>
                <div className={css.detail}><span>Consumption</span><span>{ camper.consumption }</span></div>
            </div>
      </div>
  )
}
