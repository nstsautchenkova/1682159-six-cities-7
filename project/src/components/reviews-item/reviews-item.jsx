import React from 'react';
import { useSelector } from 'react-redux';
import { getRatingInPercents } from '../../utils.js';
import { REVIEWS_COUT } from '../../const.js';
import { getComments } from '../../store/data/selectors.js';
import { Month } from '../../const.js';


function ReviewsItem(props) {
  const comments = useSelector(getComments);
  const reviewsList = comments.slice(0, REVIEWS_COUT);
  const getDate = (date) => {
    const newDate = new Date(date);
    const dateDateYear = newDate.getFullYear();
    const getDateMonth = newDate.getMonth();
    const getDateMonthName = Month[getDateMonth];
    return `${getDateMonthName} ${dateDateYear}`;
  };
  return (
    <ul className="reviews__list">
      {Object.values(reviewsList).reverse().map((review) => (
        <li key={review.id} className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              {review.user.name}
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
              {review.comment}
            </p>
            <time className="reviews__time" dateTime="2019-04-24">{getDate(review.date)}</time>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ReviewsItem;
