import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import useMap from './use-map.js';
import offerType from '../offers-prop/offers-prop.js';
import сityType from '../city-prop/city-prop.js';
import { OFFER_COUT } from '../../const.js';
import { getDefaultMapIcon } from '../../utils.js';

function MapRoomPage(props) {
  const { defaultCityMap, nearby } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, defaultCityMap);
  const reviewsOffersMap = nearby.slice(0, OFFER_COUT);

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
  }, [map, nearby]);

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
const mapStateToProps = (state) => ({
  defaultCityMap: state.defaultCityMap,
  nearby: state.nearby,
});
MapRoomPage.propTypes = {
  nearby: offerType.isRequired,
  defaultCityMap: PropTypes.exact(сityType).isRequired,
};

//export default MapReviews;
export default connect(mapStateToProps, null)(MapRoomPage);
