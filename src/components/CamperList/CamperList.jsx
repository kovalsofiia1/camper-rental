import CamperItem from '../CamperItem/CamperItem'
import css from './CamperList.module.css'

export default function CamperList({campers}) {
  return (
    <>
      <div className={css.list}>
        <h2 className={css.title}>Campers for you</h2>
          {campers.map((camper) => (
              <CamperItem camper={camper} key={ camper._id} />
          ))}
      </div>
    </>
  )
}
