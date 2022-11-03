const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help ',
}, false);

// Проверка title

const validateTitleMinLength = 30;
const validateTitleMaxLength = 100;

const validateTitle = (value) => value.length >= validateTitleMinLength && value.length <= validateTitleMaxLength;

pristine.addValidator(adForm.querySelector('#title'),
  validateTitle,
  `От ${validateTitleMinLength} до ${validateTitleMaxLength} символов`);

// Проверка price

const validateMaxPrice = 100000;

const validatePrice = (value) => value <= validateMaxPrice;

pristine.addValidator(adForm.querySelector('#price'),
  validatePrice,
  `Максимальное значение — ${validateMaxPrice}`);

const onlyNumber = (value) => /^(0|-?[1-9]\d*)$/.test(value) && value > 0;

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
  'Количество гостей должно быть меньше или равно колучеству гостей');

// Отправка формы

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
