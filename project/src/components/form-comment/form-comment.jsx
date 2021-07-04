import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newComments } from '../../store/api-actions.js';
import ratingToValues from '../form-comment/common.js';
import getRatingsEntries from '../form-comment/helpers.js';
import {CommentSetting} from '../../const.js';

function FormComment(props) {
  const { onSubmit} = props;
  const commentRef = useRef();
  const ratingRef = useRef();
  const btnRef = useRef();
  const messageSuccessRef = useRef();
  const ratingsEntries = getRatingsEntries(ratingToValues);
  const [formCommentRating, setformCommentRating] = useState();
  const [formCommentValueLength, setformCommentValueLength] = useState(0);
  const handleChangeRating = (evt) => {
    setformCommentRating(evt.target.value);
  };
  const handleChangeComment = (evt) => {
    setformCommentValueLength(evt.target.value);
  };
  if (((formCommentValueLength.length >= CommentSetting.COMMENT_LENGHT_MIN) || (formCommentValueLength.length <= CommentSetting.COMMENT_LENGHT_MAX)) && ((formCommentRating > CommentSetting.COMMENT_RATING_MIN))) {
    btnRef.current.disabled = false;
  }
  if ((formCommentValueLength.length < CommentSetting.COMMENT_LENGHT_MIN) || (formCommentValueLength.length > CommentSetting.COMMENT_LENGHT_MAX)) {
    btnRef.current.disabled = true;
  }
  const checkValid = () => {
    if (((formCommentValueLength.length >= CommentSetting.COMMENT_LENGHT_MIN) || (formCommentValueLength.length <= CommentSetting.COMMENT_LENGHT_MAX)) && ((formCommentRating > CommentSetting.COMMENT_RATING_MIN))) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (checkValid()) {
      onSubmit({
        comment: commentRef.current.value,
        rating: formCommentRating,
      });
      messageSuccessRef.current.style.display = 'block';
    }
  };
  return (
    <form
      className="reviews__form form"
      action=""
      method="post"
      onSubmit={handleSubmit}
    >
      <div
        className="commentMessage"
        ref={messageSuccessRef}
        style={{
          display: 'none',
          background: '#c6feae',
          padding: '20px',
          'margin-bottom': '20px',
        }}
      >
        Comment sent successfully!
      </div>
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
              ref={ratingRef}
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
        ref={commentRef}
        onChange={handleChangeComment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          ref={btnRef}
          disabled
        >
          Submit
        </button>
      </div>
    </form>

  );
}
const mapDispatchToProps = (dispatch) => ({
  onSubmit(commentData) {
    dispatch(newComments(commentData));
  },
});
FormComment.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

//export default FormComment;
export default connect(null, mapDispatchToProps)(FormComment);

