import { useDispatch, useSelector } from 'react-redux';
import CamperList from '../../components/CamperList/CamperList'
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import { selectCampers, selectCurrentPage, selectError, selectFilters, selectMoreToLoad, selectPerPage } from '../../redux/campers/selectors';
import { useEffect, useState } from 'react';
import { fetchCampersPage } from '../../redux/campers/operations';
import { incrementPage, setPage } from '../../redux/campers/slice';
import Filters from '../../components/Filters/Filters';
import css from './CatalogPage.module.css';
import Message from '../../components/Message/Message';
import FilterButton from '../../components/FilterButton/FilterButton';


export default function CatalogPage() {

  const campers = useSelector(selectCampers);
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const moreToLoad = useSelector(selectMoreToLoad);
  const filters = useSelector(selectFilters);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampersPage({ page: 1, limit: perPage }));
    dispatch(setPage(2));
  }, []);
  

  const handleLoadMore = () => {
    dispatch(fetchCampersPage({ page: currentPage, limit: perPage, filters }));
    dispatch(incrementPage());
  } 

  const [filtersOpen, setFiltersOpen] = useState(false);

  const handleFilters = () => {
    filtersOpen ? setFiltersOpen(false) : setFiltersOpen(true);
  }

  return (
    <div className={css.layout}>
      {filtersOpen && <Filters onClose={()=> setFiltersOpen(false)} />}
      <div className={css.content}>
        <FilterButton action={ handleFilters } />
        {!error ? <CamperList campers={campers}/> : <Message><h2>No campers found for your request</h2></Message>}
        {moreToLoad && <LoadMoreBtn action={handleLoadMore} />}
      </div>
    </div>
  )
}
