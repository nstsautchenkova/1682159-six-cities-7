import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const.js';
import { getRatingInPercents } from '../../utils.js';
import Header from '../header/header.jsx';
import FormComment from '../form-comment/form-comment.jsx';
import ReviewsList from '../reviews/reviews-list.jsx';
import MapRoomPage from '../map/room-page-map.jsx';
import OtherPlaces from '../other-places/other-places-list.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import { fetchNearbyList, fetchComments } from '../../store/api-actions.js';
import getOfferById from '../room-page/helpers.js';
import { getOffers } from '../../store/process/selectors.js';
import { getAuthorizationStatus } from '../../store/user/selectors.js';
import {OFFER_IMG_COUT} from '../../const.js';


function RoomPage(props) {
  const offers = useSelector(getOffers);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();
  const getFetchId = (offerId) => {
    dispatch(fetchNearbyList(offerId));
    dispatch(fetchComments(offerId));
  };

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    getFetchId(id);
  }, [id]);
  const offerById = getOfferById(offers, id);
  const hasOffer = Boolean(offerById);
  const offerImg = offerById.images.slice(0, OFFER_IMG_COUT);

  if (!hasOffer) {
    return <NotFoundPage />;
  } else {
    return (
      <>
        <div style={{ display: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <symbol id="icon-arrow-select" viewBox="0 0 7 4">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
            </symbol>
            <symbol id="icon-bookmark" viewBox="0 0 17 18">
              <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
            </symbol>
            <symbol id="icon-star" viewBox="0 0 13 12">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path>
            </symbol>
          </svg>
        </div>

        <div className="page">
          <Header />
          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {offerImg.map((images) => (
                    <div key={images} className="property__image-wrapper">
                      <img className="property__image" src={images} alt="Photo studio" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="property__container container">
                <div className="property__wrapper">
                  {offerById.isPremium && <div className="property__mark"><span>Premium</span></div>}
                  <div className="property__name-wrapper">
                    <h1 className="property__name">{offerById.title}</h1>
                    <button
                      className={offerById.isFavorite ? 'property__bookmark-button button property__bookmark-button--active' : 'property__bookmark-button button'}
                      type="button"
                      onClick={() => offerById.isFavorite && history.push(AppRoute.FAVORITES) ? history.push(AppRoute.FAVORITES) : history.push(AppRoute.SIGN_IN)}
                    >
                      <svg className="property__bookmark-icon" width="31" height="33">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="property__rating rating">
                    <div className="property__stars rating__stars">
                      <span style={{ width: `${getRatingInPercents(offerById.rating)}%` }}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="property__rating-value rating__value">{offerById.rating}</span>
                  </div>
                  <ul className="property__features">
                    <li className="property__feature property__feature--entire">{offerById.type}</li>
                    <li className="property__feature property__feature--bedrooms">{offerById.bedrooms} Bedrooms</li>
                    <li className="property__feature property__feature--adults">Max {offerById.maxAdults} adults</li>
                  </ul>
                  <div className="property__price">
                    <b className="property__price-value">&euro;{offerById.price}</b>
                    <span className="property__price-text">&nbsp;night</span>
                  </div>
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">
                      {offerById.goods.map((goods) => (
                        <li key={goods} className="property__inside-item">{goods}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="property__host">
                    <h2 className="property__host-title">Meet the host</h2>
                    <div className="property__host-user user">
                      <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                        <img className="property__avatar user__avatar" src={offerById.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                      </div>
                      <span className="property__user-name">{offerById.host.name}</span>
                      {offerById.host.isPro && <span className="property__user-status">Pro</span>}
                    </div>
                    <div className="property__description">
                      <p className="property__text">
                        {offerById.description}
                      </p>
                    </div>
                  </div>
                  <section className="property__reviews reviews">
                    <ReviewsList />
                    {authorizationStatus === AuthorizationStatus.AUTH && <FormComment />}
                  </section>
                </div>
              </div>
              <section className="property__map map" style={{ maxWidth: '1144px', margin: '0 auto 50px' }}>
                <MapRoomPage />
              </section>
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <OtherPlaces />
              </section>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default RoomPage;
