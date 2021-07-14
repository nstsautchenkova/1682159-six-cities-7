import React,{ useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppRoute } from '../../const.js';
import { getRatingInPercents } from '../../utils.js';
import offerType from '../offers-prop/offers-prop.js';
import { AuthorizationStatus } from '../../const.js';
import { getAuthorizationStatus } from '../../store/user/selectors.js';
import { fetchFavorite } from '../../store/api-actions.js';

function Card(props) {
  const { offer, onOfferHover } = props;
  const history = useHistory();
  const link = `${AppRoute.OFFER}/${offer.id}`;
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const cardHoverHandler = () => {
    onOfferHover(offer.id);
  };

  //Favorite
  const dispatch = useDispatch();
  const onSubmit = (hotelId, status) => {
    dispatch(fetchFavorite(hotelId, status));
  };
  const offerId = useRef();
  const handleSubmit = () => {
    const hotelId = offerId.current.id;
    let status = 0;

    if (authorizationStatus === AuthorizationStatus.AUTH) {
      if (offer.isFavorite) {
        status = 0;
      } else{
        status = 1;
      }
      onSubmit(
        hotelId, status,
      );
    } else {
      history.push(AppRoute.SIGN_IN);
    }
  };

  return (
    <article
      key={offer.id}
      className='cities__place-card place-card'
      onMouseEnter={cardHoverHandler}
      id={offer.id}
      ref={offerId}
    >
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={link}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
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
  );
}

Card.propTypes = {
  offer: offerType.isRequired,
  onOfferHover: PropTypes.func.isRequired,
};
export default Card;
