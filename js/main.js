import {inactivePage, activateFilterField} from './form-states.js';
import {setUserFormSubmit} from './form.js';
import {renderMap, setAdPoints} from './map.js';
import {priceSlider} from './slider.js';
import {useFilters, NUMBER_OF_SIMILAR_ADS} from './filter.js';
import {showAlert} from './util.js';
import {getData} from './api.js';

inactivePage();
setUserFormSubmit();
priceSlider();
renderMap();

getData((ads) => {
  activateFilterField();
  setAdPoints(ads.slice(0, NUMBER_OF_SIMILAR_ADS));
  useFilters(ads, setAdPoints);
}, () => showAlert('Не удалось загрузить список объявлений'));

