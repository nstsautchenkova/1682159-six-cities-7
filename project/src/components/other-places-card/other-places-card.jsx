import React from 'react';
import { Link } from 'react-router-dom';
import offerType from '../offers-prop/offers-prop.js';
import { AppRoute } from '../../const.js';
import { getRatingInPercents } from '../../utils.js';
function OtherPlacesCard(props) {
  const { offers} = props;
  const link = `${AppRoute.OFFER}/${offers.id}`;
  return (
    <article className="near-places__card place-card"  key={offers.id}>
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

OtherPlacesCard.propTypes = {
  offers: offerType,
};
export default OtherPlacesCard;
