// import React from 'react'
import css from './FeaturesList.module.css';
import { handleDetails, getKey } from '../CamperItem/helpers/handleFeatures';
import CamperFeature from '../CamperFeature/CamperFeature';

export default function FeaturesList({ camper }) {
    const features = handleDetails(camper);
  return (
    <>
        {Object.keys(features).map((key) => (
            features[key]!==0 && <CamperFeature icon={key} key={key} text={`${features[key]!==1 ? features[key]: ''} ${getKey(key)}`} />
        ))}
    </>
  )
}
