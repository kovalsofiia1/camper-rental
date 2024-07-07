import { useDispatch, useSelector } from 'react-redux';
import CamperList from '../../components/CamperList/CamperList'
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import { selectCampers, selectCurrentPage, selectError, selectFilters, selectMoreToLoad, selectPerPage } from '../../redux/campers/selectors';
import { useEffect } from 'react';
import { fetchCampersPage } from '../../redux/campers/operations';
import { incrementPage, setPage } from '../../redux/campers/slice';
import Filters from '../../components/Filters/Filters';
import css from './CatalogPage.module.css';
import Message from '../../components/Message/Message';


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

  return (
    <div className={css.layout}>
      <Filters/>
      <div>
        {!error ? <CamperList campers={campers}/> : <Message>No campers found for your request</Message>}
        {moreToLoad && <LoadMoreBtn action={handleLoadMore} />}
      </div>
    </div>
  )
}
