import CamperList from '../../components/CamperList/CamperList'
import { useSelector } from 'react-redux'
import { selectFavorites } from '../../redux/campers/selectors'
import Message from '../../components/Message/Message';
import { useNavigate } from 'react-router-dom';

export default function FavoritesPage() {
  const campers = useSelector(selectFavorites);
  const navigate = useNavigate();
  return (
    campers.length > 0 ?
      <CamperList campers={campers} />
      :
      <Message>
        <h2>No campers were added to favorite</h2>
        <button onClick={()=>{navigate('/catalog');}}>Explore campers now</button>
      </Message>
  )
}
