import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getRatingInPercents } from '../../utils.js';
import offerType from '../offers-prop/offers-prop.js';
import { AppRoute } from '../../const.js';

////////////////////
import { useDispatch } from 'react-redux';
import { fetchFavorite } from '../../store/api-actions.js';

function FavoritesPageCard(props) {
  const { favorite } = props;
  /////////////////////////////////////
  const dispatch = useDispatch();
  const onSubmit = (hotelId, status) => {
    dispatch(fetchFavorite(hotelId, status));
  };
  const favoriteId = useRef();
  const [isFavorite, setIsFavorite] = useState(true);

  const handleSubmit = () => {
    if (isFavorite) {
      const hotelId = favoriteId.current.id;
      const status = 0;
      onSubmit(
        hotelId, status,
      );
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  };
  const link = `${AppRoute.OFFER}/${favorite.id}`;
  ////////////////////////////////////
  return (
    <li className="favorites__locations-items" >
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{favorite.city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <article id={favorite.id} className="favorites__card place-card" ref={favoriteId}>
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <Link to={link}>
              <img className="place-card__image" src={favorite.previewImage} width="150" height="110" alt="Place image" />
            </Link>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">€{favorite.price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button
                className={isFavorite ? 'place-card__bookmark-button button place-card__bookmark-button--active' : 'place-card__bookmark-button button'}
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
                <span style={{ width: `${getRatingInPercents(favorite.rating)}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link to={link}>{favorite.title}</Link>
            </h2>
            <p className="place-card__type">{favorite.type}</p>
          </div>
        </article>
      </div>
    </li>
  );
}
FavoritesPageCard.propTypes = {
  favorite: offerType.isRequired,
};

export default FavoritesPageCard;
