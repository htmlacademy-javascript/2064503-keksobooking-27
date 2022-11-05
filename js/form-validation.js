const adForm = document.querySelector('.ad-form');


// Проверка title

const TITLE_MIN_LENGTH = 30;
const TITLE_MAX_LENGTH = 100;

const validateTitle = (value) => value.length >= TITLE_MIN_LENGTH && value.length <= TITLE_MAX_LENGTH;

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

const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

const validateForm = () => {
  const pristine = new Pristine(adForm, {
    classTo: 'ad-form__element',
    errorTextParent: 'ad-form__element',
    errorTextClass: 'text-help ',
  });

  pristine.addValidator(adForm.querySelector('#price'),
    validateMaxPrice,
    `Максимальное значение — ${MAX_PRICE}`);

  pristine.addValidator(adForm.querySelector('#price'),
    validateMinPrice,
    textMinPrice);

  pristine.addValidator(adForm.querySelector('#price'),
    onlyNumber,
    'Некорректное значение');

  pristine.addValidator(adForm.querySelector('#title'),
    validateTitle,
    `От ${TITLE_MIN_LENGTH} до ${TITLE_MAX_LENGTH} символов`);

  pristine.addValidator(adForm.querySelector('#room_number'),
    validateRoomNumber,
    'Количество комнат должно быть больше или равно колучеству гостей');

  pristine.addValidator(adForm.querySelector('#capacity'),
    validateRoomNumber,
    'Количество гостей должно быть меньше или равно колучеству комнат');

  timeIn.addEventListener('change', (evt) => {
    timeOut.value = evt.target.value;
  });

  timeOut.addEventListener('change', (evt) => {
    timeIn.value = evt.target.value;
  });

  // Отправка формы

  adForm.addEventListener('submit', (evt) => {
    if (!pristine.validate()) {
      evt.preventDefault();
    }
  });
};

export {validateForm};
