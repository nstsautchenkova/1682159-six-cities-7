import React from 'react';
import { useSelector } from 'react-redux';
import ReviewsItem from '../reviews-item/reviews-item.jsx';
import { getComments } from '../../store/data/selectors.js';


function Reviews(props) {
  const comments = useSelector(getComments);
  const reviewsCout = comments.length;
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCout}</span></h2>
      <ReviewsItem />
    </>
  );
}

export default Reviews;
