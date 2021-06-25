import PropTypes from 'prop-types';

const defaultCityType = PropTypes.exact({
  title: PropTypes.string.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
}).isRequired;

export default defaultCityType;


