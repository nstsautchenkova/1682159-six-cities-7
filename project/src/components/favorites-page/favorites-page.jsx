import React from 'react';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import OfferProp from '../offers-prop/offers-prop.js';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AppRoute } from '../../const.js';

function FavoritesPage(props) {
  const { offers } = props;
  const history = useHistory();

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

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
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

                  if (offer.isFavorite) {
                    return (
                      <li className="favorites__locations-items">
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <a className="locations__item-link" href="#">
                              <span>{offer.city.name}</span>
                            </a>
                          </div>
                        </div>
                        <div className="favorites__places">

                          <article key={key} className="favorites__card place-card">
                            <div className="favorites__image-wrapper place-card__image-wrapper">
                              <Link onClick={() => handleClick()}>
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
                                  className="place-card__bookmark-button place-card__bookmark-button--active button" type="button"
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

                        </div>
                      </li>
                    );
                  }
                })}
              </ul>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

FavoritesPage.propTypes = {
  offers: OfferProp,
};
export default FavoritesPage;