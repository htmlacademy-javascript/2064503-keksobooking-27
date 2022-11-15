import {resetPriceSlider} from './slider.js';
import {sendData} from './api.js';
import {showErrorMessage, showSuccessMessage} from './util.js';
import {addAddress} from './form-states.js';
import {STARTING_POSITION} from './map.js';

const adForm = document.querySelector('.ad-form');
const typeHousingField = adForm.querySelector('#type');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const resetButton = adForm.querySelector('.ad-form__reset');
const submitButton = adForm.querySelector('.ad-form__submit');

const MAX_PRICE = 100000;
const TITLE_MIN_LENGTH = 30;
const TITLE_MAX_LENGTH = 100;

const MinPriceList = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

// Наличие данных

const validateAvailabilityOfData = (value) => value.length > 0;

// Проверка title

const validateTitle = (value) => value.length >= TITLE_MIN_LENGTH && value.length <= TITLE_MAX_LENGTH;

// Проверка price

typeHousingField.addEventListener('change', () => {
  const price = adForm.querySelector('#price');
  price.placeholder = MinPriceList[typeHousingField.value];
});

const validateMaxPrice = (value) => value <= MAX_PRICE;

const validateMinPrice = (value) => parseInt(value, 10) >= MinPriceList[typeHousingField.value];

const textMinPrice = () => {
  const typeHousing = adForm.querySelector('#type').value;
  return `Минимальная цена для данного типа жилья ${MinPriceList[typeHousing]}`;
};

const onlyNumber = (value) => /^(0|-?[1-9]\d*)$/.test(value);


//Комнаты и гости

const validateRoomNumber = () => {
  const roomNumber = parseInt(adForm.querySelector('#room_number').value, 10);
  const capacity = parseInt(adForm.querySelector('#capacity').value, 10);
  if (roomNumber === 100) {
    return capacity === 0;
  }
  return roomNumber >= capacity && capacity !== 0;
};


// Время заезда и выезда

timeIn.addEventListener('change', (evt) => {
  timeOut.value = evt.target.value;
});

timeOut.addEventListener('change', (evt) => {
  timeIn.value = evt.target.value;
});

// Перезагрузка формы

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetPriceSlider();
  adForm.reset();
  addAddress(STARTING_POSITION);
});

// Валидация

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help ',
});

pristine.addValidator(adForm.querySelector('#title'),
  validateTitle,
  `От ${TITLE_MIN_LENGTH} до ${TITLE_MAX_LENGTH} символов`);

pristine.addValidator(adForm.querySelector('#price'),
  validateMaxPrice,
  `Максимальное значение — ${MAX_PRICE}`);

pristine.addValidator(adForm.querySelector('#price'),
  validateMinPrice,
  textMinPrice);

pristine.addValidator(adForm.querySelector('#price'),
  onlyNumber,
  'Некорректное значение');

pristine.addValidator(adForm.querySelector('#address'),
  validateAvailabilityOfData,
  'Введите адрес, использую метку на карте');

pristine.addValidator(adForm.querySelector('#room_number'),
  validateRoomNumber,
  'Количество комнат должно быть больше или равно колучеству гостей');

pristine.addValidator(adForm.querySelector('#capacity'),
  validateRoomNumber,
  'Количество гостей должно быть меньше или равно колучеству комнат');

// Отправка формы

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const setUserFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          resetPriceSlider();
          adForm.reset();
          showSuccessMessage();
          unblockSubmitButton();
        },
        () => {
          showErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};


export {setUserFormSubmit};
