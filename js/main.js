import {inactivePage} from './form-states.js';
import {setUserFormSubmit} from './form-validation.js';
import {priceSlider} from './slider.js';
import {renderMap} from './map.js';
import {getData} from './api.js';

const NUMBER_OF_SIMILAR_ADS = 10;

priceSlider();

inactivePage();

setUserFormSubmit();

getData((ads) => {
  renderMap(ads.slice(0, NUMBER_OF_SIMILAR_ADS));
});
