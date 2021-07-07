import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newComments } from '../../store/api-actions.js';
import ratingToValues from '../form-comment/common.js';
import { getRatingsEntries, checkValid } from '../form-comment/helpers.js';
import { CommentSetting } from '../../const.js';
import { useParams } from 'react-router-dom';
import { Success, Error } from '../comment-alert/comment-alert.jsx';
import { ActionCreator } from '../../store/action.js';

function FormComment(props) {
  const { onSubmit, getAlert, commentAlert } = props;
  const { id } = useParams();
  const ratingsEntries = getRatingsEntries(ratingToValues);

  const [formState, setformState] = useState({
    rating: 0,
    comment: '',
    btn: true,
    ratingCheck: false,
  });
  const { rating, comment, ratingCheck } = formState;
  let { btn } = formState;
  const handleChangeRating = (evt) => {
    setformState({
      rating: evt.target.value,
      comment: comment,
      btn: btn,
    });
  };
  const handleChangeComment = (evt) => {
    setformState({
      comment: evt.target.value,
      rating: rating,
      btn: btn,
    });
  };

  if (((comment.length >= CommentSetting.LENGHT_MIN) || (comment.length <= CommentSetting.LENGHT_MAX)) && ((rating > CommentSetting.RATING_MIN))) {
    btn = false;
  }
  if ((comment.length < CommentSetting.LENGHT_MIN) || (comment.length > CommentSetting.LENGHT_MAX)) {
    btn = true;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (checkValid(comment, rating, CommentSetting)) {
      onSubmit(
        id,
        {
          comment: comment,
          rating: rating,
        },
      );
      setformState({
        rating: 0,
        comment: '',
        btn: true,
        ratingCheck: false,
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
              className="form__rating-input visually-hidden"
              name="rating"
              id={`${value}-stars`}
              type="radio"
              value={value}
              onChange={handleChangeRating}
              checked={ratingCheck}
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
        value={comment}
        onChange={handleChangeComment}
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
          disabled={btn}
        >
          Submit
        </button>
      </div>
    </form>

  );
}
const mapStateToProps = (state) => ({
  commentAlert: state.commentAlert,
});
const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, commentData) {
    dispatch(newComments(id, commentData));
  },
  getAlert(alert) {
    dispatch(ActionCreator.commentAlert(alert));
  },
});
FormComment.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  getAlert: PropTypes.func.isRequired,
  commentAlert: PropTypes.bool.isRequired,
};

//export default FormComment;
export default connect(mapStateToProps, mapDispatchToProps)(FormComment);

