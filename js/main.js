import {inactivePage, activateFilterField} from './form-states.js';
import {setUserFormSubmit} from './form-validation.js';
import {priceSlider} from './slider.js';
import {renderMap, renderMapPoints} from './map.js';
import {getData} from './api.js';

const NUMBER_OF_SIMILAR_ADS = 10;

inactivePage();
setUserFormSubmit();
priceSlider();

const map = renderMap();
getData((ads) => {
  activateFilterField();
  renderMapPoints(map, ads.slice(0, NUMBER_OF_SIMILAR_ADS));
});
