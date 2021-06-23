import React from 'react';
import reviewsType from '../reviews-props/reviews-props.js';
import ReviewsItem from '../reviews/reviews-item.jsx';

function ReviewsList(props) {
  const { reviews } = props;
  const getReviewsCout = () => reviews.length;
  const reviewsCout = getReviewsCout();
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCout}</span></h2>
      <ReviewsItem reviews={reviews} />
    </>
  );
}

ReviewsList.propTypes = {
  reviews: reviewsType.isRequired,
};

export default ReviewsList;
