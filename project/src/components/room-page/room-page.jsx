import React from 'react';
import PropTypes from 'prop-types';
import { AppRoute } from '../../const.js';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getRatingInPercents } from '../../utils.js';
import offerType from '../offers-prop/offers-prop.js';
import reviewsType from '../reviews-props/reviews-props.js';
import defaultCityType from '../default-city-prop/default-city-prop.js';
import Header from '../header/header.jsx';
import FormComment from '../form-comment/form-comment.jsx';
import ReviewsList from '../reviews/reviews-list.jsx';
import MapReviews from '../map/reviews-map.jsx';
import OtherPlaces from '../other-places/other-places-list.jsx';
function RoomPage(props) {
  const { offers, reviews, defaultCity } = props;
  const history = useHistory();
  const location = useLocation();

  return (
    <>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewbox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol>
          <symbol id="icon-bookmark" viewbox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
          </symbol>
          <symbol id="icon-star" viewbox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path>
          </symbol>
        </svg>
      </div>

      <div className="page">
        <Header />
        <main className="page__main page__main--property">

          {offers.map((offer) => {
            const link = `${AppRoute.OFFER}/${offer.id}`;
            if (link === location.pathname) {
              return (
                <section className="property">
                  <div className="property__gallery-container container">
                    <div className="property__gallery">
                      {offer.images.map((images) => (
                        <div key={images} className="property__image-wrapper">
                          <img className="property__image" src={images} alt="Photo studio" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="property__container container">
                    <div className="property__wrapper">
                      {offer.isPremium && <div className="property__mark"><span>Premium</span></div>}
                      <div className="property__name-wrapper">
                        <h1 className="property__name">{offer.title}</h1>
                        <button
                          className={offer.isFavorite ? 'property__bookmark-button button property__bookmark-button--active' : 'property__bookmark-button button'}
                          type="button"
                          onClick={() => offer.isFavorite && history.push(AppRoute.FAVORITES)}
                        >
                          <svg className="property__bookmark-icon" width="31" height="33">
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span className="visually-hidden">To bookmarks</span>
                        </button>
                      </div>
                      <div className="property__rating rating">
                        <div className="property__stars rating__stars">
                          <span style={{ width: `${getRatingInPercents(offer.rating)}%` }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                        <span className="property__rating-value rating__value">{offer.rating}</span>
                      </div>
                      <ul className="property__features">
                        <li className="property__feature property__feature--entire">{offer.type}</li>
                        <li className="property__feature property__feature--bedrooms">{offer.bedrooms} Bedrooms</li>
                        <li className="property__feature property__feature--adults">Max {offer.maxAdults} adults</li>
                      </ul>
                      <div className="property__price">
                        <b className="property__price-value">&euro;{offer.price}</b>
                        <span className="property__price-text">&nbsp;night</span>
                      </div>
                      <div className="property__inside">
                        <h2 className="property__inside-title">What&apos;s inside</h2>
                        <ul className="property__inside-list">
                          {offer.goods.map((goods) => (
                            <li key={goods} className="property__inside-item">{goods}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="property__host">
                        <h2 className="property__host-title">Meet the host</h2>
                        <div className="property__host-user user">
                          <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                            <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                          </div>
                          <span className="property__user-name">{offer.host.name}</span>
                          {offer.host.isPro && <span className="property__user-status">Pro</span>}
                        </div>
                        <div className="property__description">
                          <p className="property__text">
                            {offer.description}
                          </p>
                        </div>
                      </div>
                      <section className="property__reviews reviews">
                        <ReviewsList reviews={reviews} />
                        <FormComment />
                      </section>
                    </div>
                  </div>
                  <section className="property__map map" style={{maxWidth: '1144px', margin:'0 auto 50px'}}>
                    <MapReviews
                      defaultCity={defaultCity}
                      offers={offers}
                    />
                  </section>
                </section>
              );
            }
          })}

          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OtherPlaces offers={offers}/>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
RoomPage.propTypes = {
  offers: offerType.isRequired,
  reviews: reviewsType.isRequired,
  defaultCity: PropTypes.exact(defaultCityType).isRequired,
};
export default RoomPage;
