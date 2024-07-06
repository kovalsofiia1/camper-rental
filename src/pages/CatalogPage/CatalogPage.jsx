import { useDispatch, useSelector } from 'react-redux';
import CamperList from '../../components/CamperList/CamperList'
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import { selectCampers, selectCurrentPage, selectMoreToLoad, selectPerPage } from '../../redux/campers/selectors';
import { useEffect } from 'react';
import { fetchCampersPage } from '../../redux/campers/operations';
import { incrementPage } from '../../redux/campers/slice';

export default function CatalogPage() {

  const campers = useSelector(selectCampers);
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const moreToLoad = useSelector(selectMoreToLoad);

  const dispatch = useDispatch();

    useEffect(() => {
      // Fetch the first page on component mount
      dispatch(fetchCampersPage({ page: 1, limit: perPage }));
    }, []);
  

  const handleLoadMore = () => {
    dispatch(fetchCampersPage({ page: currentPage, limit: perPage }));
    dispatch(incrementPage());
  } 

  return (
    <div>
      <CamperList campers={campers} />
      {moreToLoad && <LoadMoreBtn action={handleLoadMore} />}
    </div>
  )
}
