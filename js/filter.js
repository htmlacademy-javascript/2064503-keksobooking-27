import {debounce} from './util.js';

const adFilters = document.querySelector('.map__filters');
const typeFilter = adFilters.querySelector('#housing-type');
const priceFilter = adFilters.querySelector('#housing-price');
const roomsFilter = adFilters.querySelector('#housing-rooms');
const guestsFilter = adFilters.querySelector('#housing-guests');
const featuresFilter = adFilters.querySelector('#housing-features');

const NUMBER_OF_SIMILAR_ADS = 10;

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

const resetFilter = () => {
  adFilters.reset();
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

const filterFeatures = ({offer}) =>
  Array.from(featuresFilter)
    .every((filterFeature) => {
      if (!filterFeature.checked) {
        return true;
      }
      if (!offer.features) {
        return false;
      }

      return offer.features.includes(filterFeature.value);
    });

const filterAds = (ad) =>
  filterType(ad) &&
  filterPrice(ad) &&
  filterRooms(ad) &&
  filterGuests(ad) &&
  filterFeatures(ad);

const useFilters = (adsList, cb) => {
  const onFiltersChange = (ads) => () => {
    const filteredListAds = [];

    ads.every((ad) => {
      if (filterAds(ad)) {
        filteredListAds.push(ad);
      }
      return filteredListAds.length < NUMBER_OF_SIMILAR_ADS;
    });

    cb(filteredListAds);
  };

  adFilters.addEventListener('change', debounce(onFiltersChange(adsList)));
};

export {useFilters, NUMBER_OF_SIMILAR_ADS, resetFilter};
