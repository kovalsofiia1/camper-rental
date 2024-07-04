import CamperList from '../../components/CamperList/CamperList'
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';

import campers from '../../db/campers.json';

export default function CatalogPage() {

  const handleLoadMore = () => {
    console.log('load more');
  } 

  return (
    <div>
      <CamperList campers={campers} />
      <LoadMoreBtn action={handleLoadMore}/>
    </div>
  )
}
