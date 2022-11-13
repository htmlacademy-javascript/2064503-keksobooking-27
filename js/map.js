import {renderAdSuitable} from './rendering-ads.js';
import {activePage, addAddress} from './form-states.js';

const STARTING_POSITION = {
  lat: 35.69042,
  lng: 139.75181,
};

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  STARTING_POSITION,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  addAddress(coordinates);
});

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const renderMap = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      activePage();
    })
    .setView(STARTING_POSITION, 15);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainMarker.addTo(map);

  return map;
};


const renderMapPoints = (map, points) => {
  points.forEach((point) => {
    const {lat, lng} = point['location'];
    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );
    marker
      .addTo(map)
      .bindPopup(renderAdSuitable(point));
  });
};

export {renderMap, renderMapPoints};

