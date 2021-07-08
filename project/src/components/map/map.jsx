import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import useMap from './use-map.js';
import { getDefaultMapIcon, getHoverMapIcon } from '../../utils.js';
import { getListOffers, getDefaultCityMap } from '../../store/process/selectors.js';
function Map(props) {
  const { selectedOffer } = props;

  const listOffers= useSelector(getListOffers);
  const defaultCityMap= useSelector(getDefaultCityMap);

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
Map.propTypes = {
  selectedOffer: PropTypes.object,
};

export default Map;
