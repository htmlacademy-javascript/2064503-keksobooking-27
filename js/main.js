function getRandomNumbery(min, max) {
  if (checkingCorrectData(min, max)) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }
  return NaN;
}

function getRandomFractionalNumber(min, max, decimalPlaces) {
  if (checkingCorrectData(min, max) && parseInt(decimalPlaces, 10)) {
    return (Math.random() * (max - min) + min).toFixed(decimalPlaces);
  }
  return NaN;
}

function checkingCorrectData(min, max) {
  if (min > max || min < 0) {
    return false;
  }
  return true;
}

console.log(getRandomNumbery(2, 10));
console.log(getRandomFractionalNumber(2.2, 10.2, 6));
