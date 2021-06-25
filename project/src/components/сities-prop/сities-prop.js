import PropTypes from 'prop-types';

const сitiesType = PropTypes.exact({
  name: PropTypes.string.isRequired,
}).isRequired;

export default сitiesType;


