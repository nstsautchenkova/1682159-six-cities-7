import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newComments } from '../../store/api-actions.js';
import ratingToValues from '../form-comment/common.js';
import getRatingsEntries from '../form-comment/helpers.js';
import { CommentSetting } from '../../const.js';
import { commentFormDefault } from '../../utils.js';
import { fetchComments } from '../../store/api-actions.js';
import { useParams } from 'react-router-dom';
import { Success, Error } from '../comment-alert/comment-alert.jsx';
import { ActionCreator } from '../../store/action.js';

function FormComment(props) {
  const { onSubmit, getId, getAlert, commentAlert } = props;
  const { id } = useParams();
  const commentRef = useRef();
  const btnRef = useRef();

  const ratingsEntries = getRatingsEntries(ratingToValues);
  const [formRating, setformRating] = useState();
  const handleChangeRating = (evt) => {
    setformRating(evt.target.value);
  };

  const [formCommentValueLength, setformCommentValueLength] = useState(0);
  const handleChangeComment = (evt) => {
    setformCommentValueLength(evt.target.value);
  };

  if (((formCommentValueLength.length >= CommentSetting.LENGHT_MIN) || (formCommentValueLength.length <= CommentSetting.LENGHT_MAX)) && ((formRating > CommentSetting.RATING_MIN))) {
    btnRef.current.disabled = false;
  }
  if ((formCommentValueLength.length < CommentSetting.LENGHT_MIN) || (formCommentValueLength.length > CommentSetting.LENGHT_MAX)) {
    btnRef.current.disabled = true;
  }
  const checkValid = () => ((formCommentValueLength.length >= CommentSetting.LENGHT_MIN) || (formCommentValueLength.length <= CommentSetting.LENGHT_MAX)) && ((formRating > CommentSetting.RATING_MIN));

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (checkValid()) {
      onSubmit(
        id,
        {
          comment: commentRef.current.value,
          rating: formRating,
        },
      );
      getId(id);
      getAlert('Success');
      commentFormDefault();
    } else {
      getAlert('Error');
      commentFormDefault();
    }
    setTimeout(() => {
      getAlert(' ');
      commentFormDefault();
    }, 1500);
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
          id="reviews__submit"
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
const mapStateToProps = (state) => ({
  commentAlert: state.commentAlert,
});
const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, commentData) {
    dispatch(newComments(id, commentData));
  },
  getId(id) {
    dispatch(fetchComments(id));
  },
  getAlert(alert) {
    dispatch(ActionCreator.commentAlert(alert));
  },
});
FormComment.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  getId: PropTypes.func.isRequired,
  getAlert: PropTypes.func.isRequired,
  commentAlert: PropTypes.bool.isRequired,
};

//export default FormComment;
export default connect(mapStateToProps, mapDispatchToProps)(FormComment);

