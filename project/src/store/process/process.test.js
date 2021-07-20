import { process } from './process.js';
import { getOffersByCity, getMapByCity } from '../../utils.js';
import { OfferCity } from '../../const.js';
import {
    ActionType,
} from '../action.js';

const listOffers = [
    {
        "id": 1,
        "previewImage": "https://7.react.pages.academy/static/hotel/15.jpg",
        "price": 291,
        "rating": 4.3,
        "title": "Penthouse, 4-5 rooms + 5 balconies",
        "type": "hotel",
        "bedrooms": 3,
        "maxAdults": 8,
        "isFavorite": false,
        "isPremium": false,
        "images": [
            "https://7.react.pages.academy/static/hotel/12.jpg",
            "https://7.react.pages.academy/static/hotel/18.jpg",
            "https://7.react.pages.academy/static/hotel/20.jpg",
            "https://7.react.pages.academy/static/hotel/13.jpg",
            "https://7.react.pages.academy/static/hotel/10.jpg",
            "https://7.react.pages.academy/static/hotel/4.jpg",
            "https://7.react.pages.academy/static/hotel/7.jpg",
            "https://7.react.pages.academy/static/hotel/15.jpg",
            "https://7.react.pages.academy/static/hotel/2.jpg",
            "https://7.react.pages.academy/static/hotel/17.jpg",
            "https://7.react.pages.academy/static/hotel/16.jpg",
            "https://7.react.pages.academy/static/hotel/6.jpg",
            "https://7.react.pages.academy/static/hotel/11.jpg",
            "https://7.react.pages.academy/static/hotel/3.jpg"
        ],
        "goods": [
            "Towels",
            "Fridge",
            "Air conditioning",
            "Washing machine",
            "Breakfast",
            "Dishwasher",
            "Laptop friendly workspace",
            "Coffee machine",
            "Washer",
            "Baby seat"
        ],
        "host": {
            "id": 25,
            "name": "Angelina",
            "isPro": true,
            "avatarUrl": "img/avatar-angelina.jpg"
        },
        "description": "I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.",
        "city": {
            "name": "Paris",
            "location": {
                "latitude": 48.85661,
                "longitude": 2.351499,
                "zoom": 13
            },
            "latitude": 48.85661,
            "longitude": 2.351499,
            "zoom": 13
        },
        "location": {
            "location": {
                "latitude": 48.83961,
                "longitude": 2.342499,
                "zoom": 16
            },
            "latitude": 48.83961,
            "longitude": 2.342499,
            "zoom": 16
        }
    },
];
describe('Reducer: process', () => {
    it('without additional parameters should return initial state', () => {
        expect(process(undefined, {}))
            .toEqual({
                listOffers: [],
                offers: [],
                defaultCity: 'Paris',
                defaultCityMap: { 'lat': 48.864716, 'lng': 2.349014, 'zoom': 12, },
                isDataLoaded: false,
                commentAlert: '',
                favoriteHotel: [],
            });
    });

    it('selectListRent', () => {
        const state = { listOffers: [], offers: [], };
        const selectListRentAction = {
            type: ActionType.SELECT_LIST_RENT,
            payload: getOffersByCity(listOffers, state.offers),
        };

        expect(process(state, selectListRentAction))
            .toEqual({ listOffers: selectListRentAction.payload, offers: [], });
    });

    it('loadOffers', () => {
        const state = { listOffers: [], offers: [], isDataLoaded: false, defaultCity: 'Paris', };
        const loadOffersAction = {
            type: ActionType.LOAD_OFFERS,
            payload: getOffersByCity(state.defaultCity, listOffers),
        };

        expect(process(state, loadOffersAction))
            .toEqual({ listOffers: loadOffersAction.payload, offers: loadOffersAction.payload, isDataLoaded: true, defaultCity: 'Paris', });
    });

    it('selectCity', () => {
        const state = { defaultCity: 'Paris', };
        const selectCityAction = {
            type: ActionType.SELECT_CITY,
            payload: 'Paris',
        };

        expect(process(state, selectCityAction))
            .toEqual({ defaultCity: selectCityAction.payload });
    });

    it('defaultCityMap', () => {
        const state = { defaultCityMap: { 'lat': 48.864716, 'lng': 2.349014, 'zoom': 12, }, };
        const defaultCityMapAction = {
            type: ActionType.DEFAULT_CITY_MAP,
            payload: 'Paris',
        };

        expect(process(state, defaultCityMapAction))
            .toEqual({ defaultCityMap: getMapByCity(defaultCityMapAction.payload, OfferCity) });
    });

    it('commentsAlert', () => {
        const state = { commentAlert: '', };
        const commentsAlertAction = {
            type: ActionType.COMMENT_ALERT,
            payload: 'Success',
        };

        expect(process(state, commentsAlertAction))
            .toEqual({ commentAlert: commentsAlertAction.payload, });
    });

    it('favoriteHotel', () => {
        const state = {
            listOffers: [],
            offers: [],
            favoriteHotel: [],
        };
        const favoriteHotelAction = {
            type: ActionType.FAVORITE,
            payload: listOffers,
        };

        expect(process(state, favoriteHotelAction))
            .toEqual({ listOffers: [], offers: [], favoriteHotel: favoriteHotelAction.payload, });
    });
});