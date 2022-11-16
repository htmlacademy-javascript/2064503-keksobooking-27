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

const onCloseSubmitMessageClick = () => {
  successMessage.remove();
  successMessage.removeEventListener('click', onCloseSubmitMessageClick);
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
};

function onSuccessMessageEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onCloseSubmitMessageClick();
  }
}

const showSuccessMessage = () => {
  document.body.append(successMessage);
  successMessage.addEventListener('click', onCloseSubmitMessageClick);
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
};

// Сообщение при ошибки отправки

const errorSubmitMessageTemplate = document.querySelector('#error')
  .content.querySelector('.error');
const errorSubmitMessage = errorSubmitMessageTemplate.cloneNode(true);

const onErrorMessageClick = () => {
  errorSubmitMessage.remove();
  document.removeEventListener('keydown', onErrorMessageEscKeydown);
  errorSubmitMessage.removeEventListener('click', onErrorMessageClick);
};

function onErrorMessageEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onErrorMessageClick();
  }
}

const showErrorMessage = () => {
  document.body.append(errorSubmitMessage);
  errorSubmitMessage.addEventListener('click', onErrorMessageClick);
  document.addEventListener('keydown', onErrorMessageEscKeydown);
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
