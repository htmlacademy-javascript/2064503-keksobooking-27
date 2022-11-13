import {showAlert} from './util.js';

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((ads) => {
      onSuccess(ads);
    })
    .catch(() => {
      showAlert('Не удалось загрузить список объявлений');
    });
};

const sendData = (onSuccess, OnFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  ).then((respon) => {
    if (respon.ok) {
      onSuccess();
    } else {
      OnFail();
    }
  })
    .catch(() => {
      OnFail();
    });
};

export {getData, sendData};
