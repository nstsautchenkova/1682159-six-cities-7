import React from 'react';
import { connect } from 'react-redux';
import reviewsType from '../reviews-props/reviews-props.js';
import ReviewsItem from '../reviews/reviews-item.jsx';

function ReviewsList(props) {
  const { reviews } = props;
  const reviewsCout = reviews.length;
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCout}</span></h2>
      <ReviewsItem />
    </>
  );
}
const mapStateToProps = (state) => ({
  reviews: state.reviews,
});
ReviewsList.propTypes = {
  reviews: reviewsType.isRequired,
};

//export default ReviewsList;
export default connect(mapStateToProps, null)(ReviewsList);

