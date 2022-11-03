import {listAd} from './data.js';
import {renderAdSuitable} from './ad-generator.js';
import {inactivePage, activePage} from './form-states.js';
import './form-validation.js';


inactivePage();
const mapAd = document.querySelector('#map-canvas');
listAd(2).forEach((ad) => {
  mapAd.appendChild(renderAdSuitable(ad));
});


activePage();
