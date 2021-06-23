import React, { useState } from 'react';

function FormComment(props) {
  const [formCommentDate, setformCommentDate] = useState();
  const handleChangeComment = (evt) => {
    setformCommentDate(evt.target.value);
  };

  const [formCommentRating, setformCommentRating] = useState();
  const handleChangeRating = (evt) => {
    setformCommentRating(evt.target.value);
  };

  const ratingStarCout = Array.from({ length: 5 }, (v, k) => k + 1);
  const getRaitingStarTitle = (id) => {
    let raitingStarTitle = '';
    switch (id) {
      case 5: raitingStarTitle = 'perfect'; break;
      case 4: raitingStarTitle = 'good'; break;
      case 3: raitingStarTitle = 'not bad'; break;
      case 2: raitingStarTitle = 'badly'; break;
      case 1: raitingStarTitle = 'terribly'; break;
      default: raitingStarTitle = 'terribly';
    }
    return raitingStarTitle;
  };

  const createRatingStar = ratingStarCout.map((i) => (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={formCommentRating}
        id={`${i}-stars`}
        type="radio"
        onChange={handleChangeRating}
      />
      <label htmlFor={`${i}-stars`} className="reviews__rating-label form__rating-label" title={getRaitingStarTitle(i)}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  ));

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {createRatingStar}
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
