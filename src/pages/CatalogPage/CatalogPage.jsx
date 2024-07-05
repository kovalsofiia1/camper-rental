import { useSelector } from 'react-redux';
import CamperList from '../../components/CamperList/CamperList'
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import { selectCampers } from '../../redux/campers/selectors';
import { useState } from 'react';
// import campers from '../../db/campers.json';

export default function CatalogPage() {

  const campers = useSelector(selectCampers);
  const [allVisible, setAllVisible] = useState(false);
  const handleLoadMore = () => {
    setAllVisible(true);
  } 

  return (
    <div>
      <CamperList campers={allVisible ? campers : campers.slice(0, 4)} />
      {!allVisible && <LoadMoreBtn action={handleLoadMore} />}
    </div>
  )
}
