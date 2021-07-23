import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newComments } from '../../store/api-actions.js';
import ratingToValues from '../form-comment/common.js';
import { getRatingsEntries, checkIsFormValid } from '../form-comment/helpers.js';
import { useParams } from 'react-router-dom';
import { Success, Error } from '../comment-alert/comment-alert.jsx';
import { commentsAlert } from '../../store/action.js';
import { getCommentAlert } from '../../store/process/selectors.js';

function FormComment() {
  const commentAlert = useSelector(getCommentAlert);
  const dispatch = useDispatch();
  const onSubmit = (offerId, commentData) => {
    dispatch(newComments(offerId, commentData));
  };
  const getAlert = (alert) => {
    dispatch(commentsAlert(alert));
  };

  const { id } = useParams();
  const ratingsEntries = getRatingsEntries(ratingToValues);
  const [formState, setFormState] = useState({
    rating: 0,
    comment: '',
  });
  const { rating, comment } = formState;
  const handleChangeRating = (evt) => {
    setFormState({
      ...formState,
      rating: evt.target.value,
    });
  };
  const handleChangeComment = (evt) => {
    setFormState({
      ...formState,
      comment: evt.target.value,
    });
  };

  const isFormValid = checkIsFormValid(comment);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!isFormValid) {
      onSubmit(
        id,
        {
          comment: comment,
          rating: rating,
        },
      );
      setFormState({
        rating: 0,
        comment: '',
      });
      getAlert('Success');
    } else {
      getAlert('Error');
    }
    setTimeout(() => { getAlert(''); }, 1500);
  };

  return (
    <form
      className="reviews__form form"
      action=""
      method="post"
      onSubmit={handleSubmit}
    >
      {commentAlert === 'Success' && <Success />}
      {commentAlert === 'Error' && <Error />}
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingsEntries.map(([name, value]) => (
          <>
            <input
              key={value}
              className="form__rating-input visually-hidden"
              name="rating"
              id={`${value}-stars`}
              type="radio"
              value={value}
              onChange={handleChangeRating}
              checked={rating === value}
              data-testid="rating"
            />
            <label key={name} htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={name}>
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
        value={comment}
        onChange={handleChangeComment}
        data-testid="review"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          id="reviews__submit"
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isFormValid}
        >
          Submit
        </button>
      </div>
    </form>

  );
}

export default FormComment;

