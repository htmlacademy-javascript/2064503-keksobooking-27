// Генератор рандомного целого числа

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Генератор рандомного дробного числа

const getRandomPositiveFloat = (a, b, digits = 1) => {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

// Выбирает случайный элемент из массива

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Создает массив случайной длины, без повторений

const getRandomArray = (array) => {
  const randomArray = [];
  while (randomArray.length < getRandomPositiveInteger(0, array.length)) {
    const randomElement = getRandomArrayElement(array);
    if (!randomArray.includes(randomElement)) {
      randomArray.push(randomElement);
    }
  }
  return randomArray;
};

// Добавляет нуль спереди, для одного формата

const formatNumber = (number) => {
  if (number < 10) {return `0${number}`;}
  return number;
};

export {getRandomArrayElement, getRandomPositiveInteger, getRandomPositiveFloat, getRandomArray, formatNumber};
