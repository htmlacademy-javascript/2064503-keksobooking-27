import {inactivePage, activateFilterField} from './form-states.js';
import {setUserFormSubmit} from './form-validation.js';
import {renderMap, setAdPoints} from './map.js';
import {priceSlider} from './slider.js';
import {useFilters} from './filter.js';
import {showAlert} from './util.js';
import {getData} from './api.js';

inactivePage();
setUserFormSubmit();
priceSlider();
renderMap();

getData((ads) => {
  activateFilterField();
  setAdPoints(ads);
  useFilters(ads, setAdPoints);
}, () => showAlert('Не удалось загрузить список объявлений'));
