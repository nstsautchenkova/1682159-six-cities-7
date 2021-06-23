import React from 'react';
import reviewsType from '../reviews-props/reviews-props.js';
import { getRatingInPercents } from '../../utils.js';
import { REVIEWS_COUT } from '../../const.js';

function ReviewsItem(props) {
  const { reviews } = props;
  const reviewsList = reviews.slice(0, REVIEWS_COUT);
  return (
    <ul className="reviews__list">
      {reviewsList.map((review) => {
        const a = reviews.length;
        return (
          <li key={review.id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={review.avatarUrl} width="54" height="54" alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">
                {review.name}{a}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: `${getRatingInPercents(review.rating)}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {review.description}
              </p>
              <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

ReviewsItem.propTypes = {
  reviews: reviewsType.isRequired,
};

export default ReviewsItem;
