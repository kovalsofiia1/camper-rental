import { useForm } from 'react-hook-form';
import { capitalizeFirstLetter } from '../CamperItem/helpers/handleFeatures';
import css from './Filters.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { resetPage, setFilters, setPage } from '../../redux/campers/slice';
import { fetchCampersPage } from '../../redux/campers/operations';
import { selectCurrentPage, selectFilters, selectMoreToLoad, selectPerPage } from '../../redux/campers/selectors';
import { useEffect } from 'react';

const equipment = ['AC', 'automatic', 'kitchen', 'TV', 'shower'];
const types = ['panelTruck', 'fullyIntegrated', 'alcove', 'all'];

const Filter = () => {
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

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div>
          <label>
            Location
            <input type="text" {...register('location')} placeholder='Location' />
          </label>
        </div>
        <div>
          <label>
            Filters
            {equipment.map((item, index) => (
              <div key={index}>
                <label>
                  <input type="checkbox" {...register(`equipment.${item}`)} />
                  {capitalizeFirstLetter(item)}
                </label>
              </div>
            ))}
          </label>
        </div>
        <div>
          <label>
            Vehicle Type
            {types.map((type, index) => (
              <div key={index}>
                <label>
                  <input type="radio" value={type} {...register('type')} />
                  {capitalizeFirstLetter(type)}
                </label>
              </div>
            ))}
          </label>
        </div>
        <button type="submit">Search</button>
      </form>
      <button onClick={handleShowAll}>Show all</button>
    </div>
  );
};

export default Filter;
