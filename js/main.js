import {listAd} from './data.js';
import {renderAdSuitable} from './ad-generator.js';
import {inactivePage, activePage} from './form.js';

const mapAd = document.querySelector('#map-canvas');
listAd(2).forEach((ad) => {
  mapAd.appendChild(renderAdSuitable(ad));
});

inactivePage();
activePage();
