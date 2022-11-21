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

const onSuccessMessageClick = () => {
  successMessage.remove();
  successMessage.removeEventListener('click', onSuccessMessageClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onSuccessMessageClick();
  }
}

const showSuccessMessage = () => {
  document.body.append(successMessage);
  successMessage.addEventListener('click', onSuccessMessageClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

// Сообщение при ошибке отправки

const errorMessageTemplate = document.querySelector('#error')
  .content.querySelector('.error');
const errorMessage = errorMessageTemplate.cloneNode(true);

const onErrorMessageClick = () => {
  errorMessage.remove();
  document.removeEventListener('keydown', onDocumentOfErrorKeydown);
  errorMessage.removeEventListener('click', onErrorMessageClick);
};

function onDocumentOfErrorKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onErrorMessageClick();
  }
}

const showErrorMessage = () => {
  document.body.append(errorMessage);
  errorMessage.addEventListener('click', onErrorMessageClick);
  document.addEventListener('keydown', onDocumentOfErrorKeydown);
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
