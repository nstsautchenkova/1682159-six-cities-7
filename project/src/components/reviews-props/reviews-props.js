import PropTypes from 'prop-types';

const reviewsType = PropTypes.exact({
  id:PropTypes.number.isRequired,
  avatarUrl:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired,
  date:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
}).isRequired;

export default reviewsType;


