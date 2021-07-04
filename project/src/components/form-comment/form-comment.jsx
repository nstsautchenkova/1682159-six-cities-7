import React, { useState } from 'react';
import ratingToValues from '../form-comment/common.js';
import getRatingsEntries from '../form-comment/helpers.js';

function FormComment(props) {
  const [formCommentDate, setformCommentDate] = useState();
  const handleChangeComment = (evt) => {
    setformCommentDate(evt.target.value);
  };
  const [formCommentRating, setformCommentRating] = useState();
  const handleChangeRating = (evt) => {
    setformCommentRating(evt.target.value);
  };

  const ratingsEntries = getRatingsEntries(ratingToValues);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingsEntries.map(([name, value]) => (
          <>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={formCommentRating}
              id={`${value}-stars`}
              type="radio"
              onChange={handleChangeRating}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={name}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formCommentDate}
        onChange={handleChangeComment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>

  );
}

export default FormComment;
