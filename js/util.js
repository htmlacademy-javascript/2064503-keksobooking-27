// Выбирает случайный элемент из массива

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Генератор рандомного целого числа

function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Генератор рандомного дробного числа

function getRandomPositiveFloat (a, b, digits = 1) {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

// Добавляет нуль спереди, для одного формата

function formatNumber(number) {
  if (number < 9) {return `0${number}`;}
  return number;
}

export {getRandomArrayElement, getRandomPositiveInteger, getRandomPositiveFloat, formatNumber};
