// Всплывающее окна

const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '1000';
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.color = 'red';
  alertContainer.style.backgroundColor = 'black';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

// Сообщение при успешной отправки

const successMessageTemplate = document.querySelector('#success')
  .content.querySelector('.success');
const successMessage = successMessageTemplate.cloneNode(true);

const onSuccessClick = () => {
  successMessage.remove();
  successMessage.removeEventListener('click', onSuccessClick);
  document.removeEventListener('keydown', onSuccessKeydown);
};

function onSuccessKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onSuccessClick();
  }
}

const showSuccessMessage = () => {
  document.body.append(successMessage);
  successMessage.addEventListener('click', onSuccessClick);
  document.addEventListener('keydown', onSuccessKeydown);
};

// Сообщение при ошибке отправки

const errorMessageTemplate = document.querySelector('#error')
  .content.querySelector('.error');
const errorMessage = errorMessageTemplate.cloneNode(true);

const onErrorMessageClick = () => {
  errorMessage.remove();
  document.removeEventListener('keydown', onErrorMessageKeydown);
  errorMessage.removeEventListener('click', onErrorMessageClick);
};

function onErrorMessageKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onErrorMessageClick();
  }
}

const showErrorMessage = () => {
  document.body.append(errorMessage);
  errorMessage.addEventListener('click', onErrorMessageClick);
  document.addEventListener('keydown', onErrorMessageKeydown);
};

// debounce

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {showAlert, showErrorMessage, showSuccessMessage, debounce};
