import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import offerType from '../offers-prop/offers-prop.js';
import { AppRoute } from '../../const.js';
import { getRatingInPercents } from '../../utils.js';
import { fetchNearbyList, fetchComments } from '../../store/api-actions.js';
import { connect } from 'react-redux';

function OtherPlacesCard(props) {
  const { offers, getNearbyId} = props;
  const link = `${AppRoute.OFFER}/${offers.id}`;
  return (
    <article id={offers.id} className="near-places__card place-card" onClick={getNearbyId}>
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link
          to={link}
          onClick={() => window.scrollTo(0, 0)}
        >
          <img className="place-card__image" src={offers.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offers.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={offers.isFavorite ? 'place-card__bookmark-button button place-card__bookmark-button--active' : 'place-card__bookmark-button button'}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRatingInPercents(offers.rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={link}>{offers.title}</Link>
        </h2>
        <p className="place-card__type">{offers.type}</p>
      </div>
    </article>
  );
}
const mapDispatchToProps = (dispatch) => ({
  getNearbyId(evt) {
    dispatch(fetchNearbyList(evt.currentTarget.id));
    dispatch(fetchComments(evt.currentTarget.id));
  },
});
OtherPlacesCard.propTypes = {
  offers: offerType.isRequired,
  getNearbyId: PropTypes.func.isRequired,
};
//export default OtherPlacesCard;
export default connect(null, mapDispatchToProps)(OtherPlacesCard);
