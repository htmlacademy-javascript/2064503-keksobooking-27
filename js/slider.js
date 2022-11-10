import {MAX_PRICE} from './form-validation.js';

const adForm = document.querySelector('.ad-form');
const sliderElement = adForm.querySelector('.ad-form__slider');
const priceField = adForm.querySelector('#price');

const priceSlider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: MAX_PRICE,
    },
    start: 0,
    step: 50,
    connect: 'lower',
    format: {
      to: (value) => value.toFixed(0),
      from: (value) => value,
    }
  });

  sliderElement.noUiSlider.on('slide', () => {
    priceField.value = sliderElement.noUiSlider.get();
  });

  priceField.addEventListener('input', () => {
    sliderElement.noUiSlider.set(priceField.value);
  });

};

export {priceSlider};

