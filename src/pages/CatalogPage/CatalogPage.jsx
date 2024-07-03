import CamperList from '../../components/CamperList/CamperList'

import campers from '../../db/campers.json';

export default function CatalogPage() {
  return (
    <div>
      <CamperList campers={campers} />
    </div>
  )
}
