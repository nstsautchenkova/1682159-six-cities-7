import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './use-map.js';
import PropTypes from 'prop-types';
import offerType from '../offers-prop/offers-prop.js';
import defaultCityType from '../default-city-prop/default-city-prop.js';
import { getDefaultMapIcon, getHoverMapIcon} from '../../utils.js';
function Map(props) {
  const { defaultCity, offers, selectedOffer } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, defaultCity);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (selectedOffer && selectedOffer.id === offer.id)
              ? getHoverMapIcon(leaflet)
              : getDefaultMapIcon(leaflet),
          })
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

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
Map.propTypes = {
  offers: offerType.isRequired,
  defaultCity: PropTypes.exact(defaultCityType).isRequired,
  selectedOffer: PropTypes.node.isRequired,
};

export default Map;
