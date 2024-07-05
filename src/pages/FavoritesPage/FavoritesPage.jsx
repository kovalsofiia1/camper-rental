import CamperList from '../../components/CamperList/CamperList'
import { useSelector } from 'react-redux'
import { selectFavorites } from '../../redux/campers/selectors'

export default function FavoritesPage() {
  const campers = useSelector(selectFavorites);

  return (
    <div>
      <CamperList campers={campers} />
    </div>
  )
}
