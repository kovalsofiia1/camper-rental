import CamperItem from '../CamperItem/CamperItem'
import css from './CamperList.module.css'

export default function CamperList({campers}) {
  return (
    <div className={css.list}>
        {campers.map((camper) => (
            <CamperItem camper={camper} key={ camper._id} />
        ))}
    </div>
  )
}
