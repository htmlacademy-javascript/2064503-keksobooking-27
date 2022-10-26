const similarAdSuitableTemplate = document.querySelector('#card').content.querySelector('.popup');
const adSuitable = similarAdSuitableTemplate.cloneNode(true);

const renderTitle = (title) => {
  if (title) {
    adSuitable.querySelector('.popup__title').textContent = title;
  } else {
    adSuitable.querySelector('.popup__title').remove();
  }
};

const renderAddress = (address) => {
  if (address) {
    adSuitable.querySelector('.popup__text--address').textContent = address;
  } else {
    adSuitable.querySelector('.popup__text--address').remove();
  }
};

const renderPrice = (price) => {
  if (price > 0) {
    adSuitable.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  } else {
    adSuitable.querySelector('.popup__text--price').remove();
  }
};

const renderType = (type) => {
  adSuitable.querySelector('.popup__type').textContent = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Двоерц',
    hotel: 'Отель',
  }[type];
};

const renderCapacity = (rooms, guests) => {
  adSuitable.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests} гостей`;
};

const renderTime = (checkin, checkout) => {
  adSuitable.querySelector('.popup__text--time').textContent = `заезд после ${checkin}, выезд до ${checkout}`;
};

const renderFeatures = (features) => {
  if (features) {
    const featuresList = adSuitable.querySelectorAll('.popup__feature');
    const modifiers = features.map((feature) => `popup__feature--${feature}`);

    featuresList.forEach ((featureItem) => {
      if (!(modifiers.includes(featureItem.classList[1]))) {
        featureItem.remove();
      }
    });

  } else {
    adSuitable.querySelector('.popup__features').remove();
  }
};

const renderDescription = (description) => {
  if (description) {
    adSuitable.querySelector('.popup__description').textContent = description;
  } else {
    adSuitable.querySelector('.popup__description').remove();
  }
};

const renderPhotos = (photos) => {
  const photoTemplate = document.querySelector('#photos-item').content.querySelector('.popup__photo');
  const photoTemplateElement = photoTemplate.cloneNode(true);
  if (photos) {
    photos.forEach((photo) => {
      photoTemplateElement.src = photo;
      adSuitable.querySelector('.popup__photos').append(photoTemplateElement);
    });
  } else {
    adSuitable.querySelector('.popup__photos').remove();
  }
};

const renderAvatar = (avatar) => {
  if (avatar) {
    adSuitable.querySelector('.popup__avatar').src = avatar;
  } else {
    adSuitable.querySelector('.popup__avatar').remove();
  }
};

const renderAdSuitable = ({author, offer}) => {
  renderAvatar(author.avatar);
  renderTitle(offer.title);
  renderAddress(offer.address);
  renderPrice(offer.price);
  renderType(offer.type);
  renderCapacity(offer.rooms, offer.guests);
  renderTime(offer.checkin, offer.checkout);
  renderFeatures(offer.features);
  renderDescription(offer.description);
  renderPhotos(offer.photos);

  return adSuitable;
};

export {renderAdSuitable};
