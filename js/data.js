import {getRandomArrayElement, getRandomPositiveInteger, getRandomPositiveFloat, formatNumber} from './util.js';

const TYPE_HOUSING = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const SIMILAR_AD_COUNT = 10;

const createAuthor = () => ({
  avatar: `img/avatars/user${formatNumber(getRandomPositiveInteger(1,10))}.png`,
});

// Создает массив случайной длины, без повторений

const getRandomArray = (array) => {
  const randomArray = [];
  while (randomArray.length <= getRandomPositiveInteger(1,array.length)) {
    const randomElement = getRandomArrayElement(array);
    if (!randomArray.includes(randomElement)) {
      randomArray.push(randomElement);
    }
  }
  return randomArray;
};

// let randomElement = getRandomArrayElement(array);
//     if (!includes(randomElement, randomArray)) {
//       randomArray.push(randomElement);
//     }

// Создает объект с информацией об объявления

const createOffer = (location) => ({
  title: 'Апартаменты в Питере',
  address: `{${location.lat}}, {${location.lng}}`,
  price: getRandomPositiveInteger(1, 1000000),
  type: getRandomArrayElement(TYPE_HOUSING),
  rooms: getRandomPositiveInteger(1, 10),
  guests: getRandomPositiveInteger(1, 20),
  checkin: getRandomArrayElement(CHECK_TIME),
  checkout: getRandomArrayElement(CHECK_TIME),
  features: getRandomArray(FEATURES),
  description: 'Топ за свои деньги',
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

const listAd = () => Array.from({length: SIMILAR_AD_COUNT}, createAd);

export {listAd};
