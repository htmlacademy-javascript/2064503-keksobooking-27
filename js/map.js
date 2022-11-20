import {renderAdSuitable} from './rendering-ads.js';
import {activateAdFormField, setAddress} from './form-states.js';

const startingPosition = {
  lat: 35.69042,
  lng: 139.75181,
};

const map = L.map('map-canvas')
  .on('load', () => {
    activateAdFormField();
  });
const markerGroup = L.layerGroup().addTo(map);
setAddress(startingPosition);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainMarker = L.marker(
  startingPosition,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  setAddress(coordinates);
});

const renderMap = () => {
  map.setView(startingPosition, 13);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainMarker.addTo(map);
};


const renderMapPoints = (points) => {
  points.forEach((point) => {
    const {lat, lng} = point.location;
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
      .addTo(markerGroup)
      .bindPopup(renderAdSuitable(point));
  });
};

const replaceMarkers = (points) => {
  markerGroup.clearLayers();
  renderMapPoints(points);
};

const addMarkers = (coordinates) => mainMarker.setLatLng(coordinates);

const resetMap = () => {
  setAddress(startingPosition);
  addMarkers(startingPosition);
  map.setView(startingPosition, 13);
};

export {renderMap, replaceMarkers, resetMap};

