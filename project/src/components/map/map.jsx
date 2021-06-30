import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import useMap from './use-map.js';
import offerType from '../offers-prop/offers-prop.js';
import { getDefaultMapIcon, getHoverMapIcon } from '../../utils.js';
import сityType from '../city-prop/city-prop.js';
function Map(props) {
  const { selectedOffer, listOffers, defaultCityMap } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, defaultCityMap);
  const markerLayer = leaflet.layerGroup();

  useEffect(() => {
    if (map) {
      listOffers.forEach((offer) => {
        markerLayer.addTo(map);
        const marker = leaflet.marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },
          {
            icon: (selectedOffer && selectedOffer.id === offer.id)
              ? getHoverMapIcon(leaflet)
              : getDefaultMapIcon(leaflet),
          },
        );
        marker
          .addTo(markerLayer);
        map.panTo(new leaflet.LatLng(defaultCityMap.lat, defaultCityMap.lng));
      });
    }
    return () => {
      if (map) {
        markerLayer.clearLayers();
      }
    };
  }, [map, listOffers, selectedOffer]);

  return (
    <div
      id="map"
      style={{ height: '100%' }}
      ref={mapRef}
    >
    </div>
  );
}
const mapStateToProps = (state) => ({
  listOffers: state.listOffers,
  defaultCityMap: state.defaultCityMap,
});
Map.propTypes = {
  selectedOffer: PropTypes.node.isRequired,
  listOffers: offerType.isRequired,
  defaultCityMap: PropTypes.exact(сityType).isRequired,
};

export { Map };
export default connect(mapStateToProps, null)(Map);
