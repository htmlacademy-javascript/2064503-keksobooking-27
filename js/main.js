import {deactivatePage, activateFilterForm} from './form-states.js';
import {initUserFormSubmit} from './form.js';
import {renderMap, replaceMarkers} from './map.js';
import {initPriceSlider} from './slider.js';
import {useFilters, NUMBER_OF_SIMILAR_ADS} from './filter.js';
import {showAlert} from './util.js';
import {getData} from './api.js';

deactivatePage();
initUserFormSubmit();
initPriceSlider();
renderMap();

getData((ads) => {
  activateFilterForm();
  replaceMarkers(ads.slice(0, NUMBER_OF_SIMILAR_ADS));
  useFilters(ads, replaceMarkers);
}, () => showAlert('Не удалось загрузить список объявлений'));

