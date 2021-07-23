import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './use-map.js';
import { OFFER_COUNT } from '../../const.js';
import { getDefaultMapIcon } from '../../utils.js';
import { getDefaultCityMap } from '../../store/process/selectors.js';
import { getNearby } from '../../store/data/selectors.js';


function MapRoomPage() {
  const defaultCityMap = useSelector(getDefaultCityMap);
  const nearby = useSelector(getNearby);

  const mapRef = useRef(null);
  const map = useMap(mapRef, defaultCityMap);
  const reviewsOffersMap = nearby.slice(0, OFFER_COUNT);

  useEffect(() => {
    if (map) {
      reviewsOffersMap.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: getDefaultMapIcon(leaflet),
          })
          .addTo(map);
        map.panTo(new leaflet.LatLng(offer.location.latitude, offer.location.longitude));
      });
    }
  }, [map, nearby, reviewsOffersMap]);

  return (
    <>
      <div className={map}></div>
      <div
        id="map"
        style={{ height: '100%' }}
        ref={mapRef}
      >
      </div>
    </>
  );
}

export default MapRoomPage;
