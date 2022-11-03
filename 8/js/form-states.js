const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('.ad-form__element');
const adFormName = 'ad-form';

const mapFilters = document.querySelector('.map__filters');
const mapFiltersElements = mapFilters.querySelectorAll('.map__filter');
const mapFeatures = mapFilters.querySelector('.map__features');
const mapFilterName = 'map__filters';

const inactive = (block, elements, name) => {
  block.classList.add(`${name}--disabled`);
  elements.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
};

const active = (block, elements, name) => {
  block.classList.remove(`${name}--disabled`);
  elements.forEach((element) => {
    element.removeAttribute('disabled');
  });
};

const inactivePage = () => {
  inactive(adForm, adFormElements, adFormName);
  inactive(mapFilters, mapFiltersElements, mapFilterName);
  mapFeatures.setAttribute('disabled', 'disabled');
};

const activePage = () => {
  active(adForm, adFormElements, adFormName);
  active(mapFilters, mapFiltersElements, mapFilterName);
  mapFeatures.removeAttribute('disabled');
};

export {inactivePage, activePage};
