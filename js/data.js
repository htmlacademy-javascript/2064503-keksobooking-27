import {getRandomArrayElement, getRandomPositiveInteger, getRandomPositiveFloat, getRandomArray, formatNumber} from './util.js';

const TYPE_HOUSING = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const TITLES = ['Апартаменты в центре', 'Апартаменты на окраине'];
const DESCRIPTIONS = ['Топ за свои деньги', 'От 3 дней', '-', ''];

const createAuthor = () => ({
  avatar: `img/avatars/user${formatNumber(getRandomPositiveInteger(1,10))}.png`,
});

// Создает объект с информацией об объявления

const createOffer = (location) => ({
  title: getRandomArrayElement(TITLES),
  address: `{${location.lat}}, {${location.lng}}`,
  price: getRandomPositiveInteger(1000, 10000),
  type: getRandomArrayElement(TYPE_HOUSING),
  rooms: getRandomPositiveInteger(1, 10),
  guests: getRandomPositiveInteger(1, 20),
  checkin: getRandomArrayElement(CHECK_TIME),
  checkout: getRandomArrayElement(CHECK_TIME),
  features: getRandomArray(FEATURES),
  description: getRandomArrayElement(DESCRIPTIONS),
  photos: getRandomArray(PHOTOS),
});

// создает объект с местоположением

const createLocation = () => ({
  lat: getRandomPositiveFloat(35.65, 35.7, 5),
  lng: getRandomPositiveFloat(139.7, 139.8, 5),
});

// Обединяет информацию об объявлении

const createAd = () => {
  const location = createLocation();
  return {
    author: createAuthor(),
    offer: createOffer(location),
    location,
  };
};

// Создает список с объектами

const listAd = (count = 1) => Array.from({length: count}, createAd);

export {listAd, createAd};
