import { useForm } from 'react-hook-form';
import { capitalizeFirstLetter, getKey } from '../CamperItem/helpers/handleFeatures';
import css from './Filters.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { resetPage, setFilters, setPage } from '../../redux/campers/slice';
import { fetchCampersPage } from '../../redux/campers/operations';
import { selectCurrentPage, selectFilters, selectPerPage } from '../../redux/campers/selectors';
import { useEffect, useRef } from 'react';
import spritePath from '../../assets/icons/icons.svg';

const equipment = ['AC', 'automatic', 'kitchen', 'TV', 'shower'];
const types = ['panelTruck', 'fullyIntegrated', 'alcove', 'all'];

const Filter = ({onClose}) => {
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const filters = useSelector(selectFilters);

  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    dispatch(resetPage());
    dispatch(setFilters(data));
  };

  const handleShowAll = () => {
    reset();
    dispatch(setFilters({}));
    dispatch(resetPage());
    dispatch(fetchCampersPage({ page: 1, limit: perPage, filters: {} }));
    dispatch(setPage(2));
  }

  useEffect(() => {
    if (Object.keys(filters).length > 0) {
      dispatch(fetchCampersPage({ page: currentPage, limit: perPage, filters }));
    }
  }, [dispatch, currentPage, perPage, filters]);

   const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onClose();
    }
    };

    const handleDocumentKeyDown = event => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleDocumentKeyDown);
    return () => {
      document.removeEventListener('keydown', handleDocumentKeyDown);
    };
  }, [onClose]);

  return (
    <div className={css.backdrop} onClick={handleClickOutside}>
      <div className={css.filters} ref={wrapperRef}>
        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
          <div className={css.inputContainer}>
            <p className={css.label}>
              Location
            </p>
            
            <input type="text" {...register('location')} placeholder='City' className={css.input} />
            <svg
                className={css.mapIcon}
                width="18"
                height="20"
                aria-label={`pin icon`}
              >
                <use href={`${spritePath}#icon-map-pin`} /> 
              </svg>
          </div>
            
          <div className={css.inputContainer}>
              <p className={css.label}>Filters</p>
            <div className={css.container}>
              <h2 className={css.bigLabel}>
                  Vehicle equipment
              </h2>
              <div className={css.separator}></div>
              <div className={css.options}>
                {equipment.map((item, index) => (
                  <div key={index} className={css.radioOption}>
                    <input
                      id={item}
                      type="checkbox" {...register(`equipment.${item}`)}
                      className={css.radioInput}
                    />
                    <label htmlFor={item} className={css.radioLabel}>
                      <svg
                        className={css.icon}
                        width="40"
                        height="28"
                        aria-label={`${item} icon`} 
                      >
                        <use href={`${spritePath}#icon-${item}`} /> 
                      </svg>
                      <p className={css.name}>{capitalizeFirstLetter(getKey(item))}</p>
                    </label>
                  </div>
                ))}
              </div>
              {/* {equipment.map((item, index) => (
                <div key={index}>
                  <label>
                    <input type="checkbox" {...register(`equipment.${item}`)} />
                    {capitalizeFirstLetter(item)}
                  </label>
                </div>
              ))} */}
            </div>
          </div>
          <div className={css.container}>
            <h2 className={css.bigLabel}>
                Vehicle Type
              </h2>
              <div className={css.separator}></div>
            <div className={css.options}>
              {types.map((type, index) => (
                <div key={index} className={css.radioOption}>
                  <input
                    type="radio"
                    id={`radio-${type}`}
                    {...register('type')}
                    value={type}
                    className={css.radioInput}
                  />
                  <label htmlFor={`radio-${type}`} className={css.radioLabel}>
                    <svg
                      className={css.icon}
                      width="40"
                      height="28"
                      aria-label={`${type} icon`} // Example label for accessibility
                    >
                      <use href={`${spritePath}#icon-${type}`} /> 
                    </svg>
                    <p className={css.name}>{capitalizeFirstLetter(getKey(type))}</p>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className={css.controls}>
            <button type="submit">Search</button>
            <div className={css.separator}></div>
            <button onClick={handleShowAll}>Show all campers</button>
          </div>
          
        </form>
       
      </div>
    </div>
  );
};

export default Filter;
