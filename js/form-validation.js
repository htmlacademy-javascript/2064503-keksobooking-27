const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help ',
}, false);

// Проверка title

const TITLE_MIN_LENGTH = 30;
const TITLE_MAX_LENGTH = 100;

const validateTitle = (value) => value.length >= TITLE_MIN_LENGTH && value.length <= TITLE_MAX_LENGTH;

pristine.addValidator(adForm.querySelector('#title'),
  validateTitle,
  `От ${TITLE_MIN_LENGTH} до ${TITLE_MAX_LENGTH} символов`);

// Проверка price

const MAX_PRICE = 100000;

const MinPriceList = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const validateMaxPrice = (value) => value <= MAX_PRICE;

const validateMinPrice = (value) => {
  const typeHousing = adForm.querySelector('#type').value;
  return Number(value) >= MinPriceList[typeHousing];
};

const textMinPrice = () => {
  const typeHousing = adForm.querySelector('#type').value;
  return `Минимальная цена для данного типа жилья ${MinPriceList[typeHousing]}`;
};

const onlyNumber = (value) => /^(0|-?[1-9]\d*)$/.test(value);

pristine.addValidator(adForm.querySelector('#price'),
  validateMaxPrice,
  `Максимальное значение — ${MAX_PRICE}`);

pristine.addValidator(adForm.querySelector('#price'),
  validateMinPrice,
  textMinPrice);

pristine.addValidator(adForm.querySelector('#price'),
  onlyNumber,
  'Некорректное значение');

//Комнаты и гости

const validateRoomNumber = () => {
  const roomNumber = Number(adForm.querySelector('#room_number').value);
  const capacity = Number(adForm.querySelector('#capacity').value);
  if (roomNumber === 100) {
    return capacity === 0;
  }
  return roomNumber >= capacity && capacity !== 0;
};

pristine.addValidator(adForm.querySelector('#room_number'),
  validateRoomNumber,
  'Количество комнат должно быть больше или равно колучеству гостей');

pristine.addValidator(adForm.querySelector('#capacity'),
  validateRoomNumber,
  'Количество гостей должно быть меньше или равно колучеству комнат');

// Время заезда и выезда

const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

const onTimeInChange = () => {
  timeOut.value = timeIn.value;
};

const onTimeOutChange = () => {
  timeIn.value = timeOut.value;
};

timeIn.addEventListener('change', onTimeInChange);
timeOut.addEventListener('change', onTimeOutChange);

// Отправка формы

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
