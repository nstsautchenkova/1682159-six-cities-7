import React from 'react';
import { useSelector } from 'react-redux';
import ReviewsItem from '../reviews-item/reviews-item.jsx';
import { getComments } from '../../store/data/selectors.js';
import { REVIEWS_COUT } from '../../const.js';

function Reviews(props) {
  const comments = useSelector(getComments);
  const reviewsCout = comments.length;
  const reviewsList = comments.slice(0, REVIEWS_COUT);
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCout}</span></h2>
      {reviewsList.reverse().map((review) =>
        <ReviewsItem key={review.id} review={review}/>,
      )}
    </>
  );
}

export default Reviews;
