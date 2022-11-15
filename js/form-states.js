const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('.ad-form__element');

const mapFilters = document.querySelector('.map__filters');
const mapFiltersElements = mapFilters.querySelectorAll('.map__filter');
const mapFeatures = mapFilters.querySelector('.map__features');

const addressField = adForm.querySelector('#address');

const COORDINATE_ACCURACY = 5;

// Состояния формы

const inactivePage = () => {
  adForm.classList.add('ad-form--disabled');
  adFormElements.forEach((element) => {
    element.removeAttribute('disabled');
  });

  mapFilters.classList.add('map__filters--disabled');
  mapFiltersElements.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
  mapFeatures.setAttribute('disabled', 'disabled');
};

const activateFilterField = () => {
  mapFilters.classList.remove('map__filters--disabled');
  mapFiltersElements.forEach((element) => {
    element.removeAttribute('disabled');
  });
  mapFeatures.removeAttribute('disabled');
};

const activateAdFormField = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormElements.forEach((element) => {
    element.removeAttribute('disabled');
  });
};

// Поле адреса

const addAddress = (address) => {
  addressField.value = `${(address.lat).toFixed(COORDINATE_ACCURACY)}, ${(address.lng).toFixed(COORDINATE_ACCURACY)}`;
};

export {inactivePage, activateFilterField, activateAdFormField, addAddress};
