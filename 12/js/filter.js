import {debounce} from './util.js';

const adFilters = document.querySelector('.map__filters');
const typeFilter = adFilters.querySelector('#housing-type');
const priceFilter = adFilters.querySelector('#housing-price');
const roomsFilter = adFilters.querySelector('#housing-rooms');
const guestsFilter = adFilters.querySelector('#housing-guests');
const featuresFilter = adFilters.querySelector('#housing-features');

const priceList = {
  low: {
    min: 0,
    max: 9999,
  },
  middle: {
    min: 10000,
    max: 49999,
  },
  high: {
    min: 50000,
    max: 100000,
  }
};

const filterType = ({offer}) => typeFilter.value === 'any' ||
  offer.type === typeFilter.value;

const filterPrice = ({offer}) => priceFilter.value === 'any' ||
  (offer.price >= priceList[priceFilter.value].min &&
    offer.price <= priceList[priceFilter.value].max);

const filterRooms = ({offer}) => roomsFilter.value === 'any' ||
  offer.rooms === parseInt(roomsFilter.value, 10);

const filterGuests = ({offer}) => guestsFilter.value === 'any' ||
  offer.guests === parseInt(guestsFilter.value, 10);

const filterFeatures = ({offer}) => {
  const checkedFilters = featuresFilter.querySelectorAll('input:checked');
  if (offer.features) {
    return Array.from(checkedFilters).every((feature) =>
      offer.features.includes(feature.value));
  }

  return false;
};

const filterAds = (ad) =>
  filterType(ad) &&
  filterPrice(ad) &&
  filterRooms(ad) &&
  filterGuests(ad) &&
  filterFeatures(ad);

const useFilters = (adsList, cb) => {
  const onChangeFilters = (ads) => () => {
    const filteredListAds = ads.slice()
      .filter(filterAds);

    cb(filteredListAds);
  };

  adFilters.addEventListener('change', debounce(onChangeFilters(adsList)));
};

export {useFilters};
