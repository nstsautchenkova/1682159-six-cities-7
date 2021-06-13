import React, { useState } from 'react';
import OfferProp from '../offers-prop/offers-prop.js';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AppRoute } from '../../const.js';

function Card(props) {
  const { offers } = props;
  const history = useHistory();

  const [isCardActive, setCardActive] = useState({
    cardActiveId: '',
  });
  const { cardActiveId } = isCardActive;
  const cardActiveKey = (e) => {
    setCardActive({ cardActiveId: e });
  };

  return (
    <>
      {offers.map((offer, id) => {
        const key = `${id}-${offer.id}`;
        let offerRatingValue = 0;
        if (offer.rating > 4) {
          offerRatingValue = '100%';
        } else if (offer.rating > 3) {
          offerRatingValue = '80%';
        } else if (offer.rating > 2) {
          offerRatingValue = '60%';
        } else if (offer.rating > 1) {
          offerRatingValue = '40%';
        }
        else if (offer.rating > 0) {
          offerRatingValue = '20%';
        }
        const offerRating = {
          width: offerRatingValue,
        };

        const link = `${AppRoute.OFFER_$ID}-${offer.id}`;
        function handleClick() {
          history.push(link);
        }
        return (
          <article
            key={key}
            className='cities__place-card place-card'
            onMouseEnter={() => {
              cardActiveKey(offer.id);
            }}
          >
            <div style={{ display: 'none' }}>idActiveCard: {cardActiveId}</div>
            <div className="cities__image-wrapper place-card__image-wrapper">
              <Link onClick={() => handleClick()}>
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
                  className={offer.isFavorite === true ? 'place-card__bookmark-button button place-card__bookmark-button--active' : 'place-card__bookmark-button button'}
                  type="button"
                  onClick={() => offer.isFavorite === true ? history.push(AppRoute.FAVORITES) : offer.isFavorite = true}
                >
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">In bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={offerRating}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <Link onClick={() => handleClick()}>{offer.title}</Link>
              </h2>
              <p className="place-card__type">{offer.type}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}

Card.propTypes = {
  offers: OfferProp,
};
export default Card;
