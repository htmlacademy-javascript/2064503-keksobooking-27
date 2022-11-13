const adForm = document.querySelector('.ad-form');
const priceSliderElement = adForm.querySelector('.ad-form__slider');
const priceField = adForm.querySelector('#price');

noUiSlider.create(priceSliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 0,
  step: 50,
  connect: 'lower',
  format: {
    to: (value) => value.toFixed(0),
    from: (value) => value,
  }
});

const priceSlider = () => {
  priceSliderElement.noUiSlider.on('slide', () => {
    priceField.value = priceSliderElement.noUiSlider.get();
  });

  priceField.addEventListener('input', () => {
    priceSliderElement.noUiSlider.set(priceField.value);
  });
};

const resetPriceSlider = () => priceSliderElement.noUiSlider.reset();

export {priceSlider, resetPriceSlider};

