import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AppRoute } from '../../const.js';
import { getRatingInPercents } from '../../utils.js';
import offerType from '../offers-prop/offers-prop.js';

function Card(props) {
  const { offers, onOfferHover } = props;
  const history = useHistory();
  const link = `${AppRoute.OFFER}/${offers.id}`;

  const cardHoverHandler = () => {
    onOfferHover(offers.id);
  };
  return (
    <article
      id={offers.id}
      className='cities__place-card place-card'
      onMouseEnter={cardHoverHandler}
    >
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={link}>
          <img className="place-card__image" src={offers.preview_image} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offers.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={offers.is_favorite ? 'place-card__bookmark-button button place-card__bookmark-button--active' : 'place-card__bookmark-button button'}
            type="button"
            onClick={() => offers.is_favorite && history.push(AppRoute.FAVORITES)}
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

Card.propTypes = {
  offers: offerType.isRequired,
  onOfferHover: PropTypes.func.isRequired,
};
export default Card;
