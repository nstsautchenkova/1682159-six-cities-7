import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchFavorite } from '../../store/api-actions.js';
import { getRatingInPercents } from '../../utils.js';
import offerType from '../offers-prop/offers-prop.js';
import { AppRoute } from '../../const.js';

function FavoritesPageCard(props) {
  const { offer } = props;

  const dispatch = useDispatch();
  const onSubmit = (hotelId, status) => {
    dispatch(fetchFavorite(hotelId, status));
  };
  const offerId = useRef();

  const handleSubmit = () => {
    const hotelId = offerId.current.id;
    let status = 0;

    if (offer.isFavorite) {
      status = 0;
    } else {
      status = 1;
    }
    onSubmit(
      hotelId, status,
    );
  };
  const link = `${AppRoute.OFFER}/${offer.id}`;

  return (
    <li className="favorites__locations-items" >
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{offer.city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <article id={offer.id} className="favorites__card place-card" ref={offerId}>
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <Link to={link}>
              <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image" />
            </Link>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">€{offer.price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button
                className={offer.isFavorite ? 'place-card__bookmark-button button place-card__bookmark-button--active' : 'place-card__bookmark-button button'}
                type="button"
                onClick={handleSubmit}
              >
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{ width: `${getRatingInPercents(offer.rating)}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link to={link}>{offer.title}</Link>
            </h2>
            <p className="place-card__type">{offer.type}</p>
          </div>
        </article>
      </div>
    </li>
  );
}
FavoritesPageCard.propTypes = {
  offer: offerType.isRequired,
};

export default FavoritesPageCard;
