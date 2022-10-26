import {listAd} from './data.js';
import {renderAdSuitable} from './ad-generator.js';

const mapAd = document.querySelector('#map-canvas');

listAd().forEach((ad) => {
  mapAd.appendChild(renderAdSuitable(ad));
});
