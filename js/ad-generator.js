const similarAdSuitableTemplate = document.querySelector('#card').content.querySelector('.popup');

const renderTitle = (adSuitable, title) => {
  if (title) {
    adSuitable.querySelector('.popup__title').textContent = title;
  } else {
    adSuitable.querySelector('.popup__title').remove();
  }
};

const renderAddress = (adSuitable, address) => {
  if (address) {
    adSuitable.querySelector('.popup__text--address').textContent = address;
  } else {
    adSuitable.querySelector('.popup__text--address').remove();
  }
};

const renderPrice = (adSuitable, price) => {
  if (price > 0) {
    adSuitable.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  } else {
    adSuitable.querySelector('.popup__text--price').remove();
  }
};

const renderType = (adSuitable, type) => {
  adSuitable.querySelector('.popup__type').textContent = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Двоерц',
    hotel: 'Отель',
  }[type];
};

const renderCapacity = (adSuitable, rooms, guests) => {
  adSuitable.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests} гостей`;
};

const renderTime = (adSuitable, checkin, checkout) => {
  adSuitable.querySelector('.popup__text--time').textContent = `заезд после ${checkin}, выезд до ${checkout}`;
};

const renderFeatures = (adSuitable, features) => {
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

const renderDescription = (adSuitable, description) => {
  if (description) {
    adSuitable.querySelector('.popup__description').textContent = description;
  } else {
    adSuitable.querySelector('.popup__description').remove();
  }
};

const renderPhotos = (adSuitable, photos) => {
  const photoTemplate = document.querySelector('#photos-item').content.querySelector('.popup__photo');
  if (photos.length > 0) {
    photos.forEach((photo) => {
      const photoTemplateElement = photoTemplate.cloneNode(true);
      photoTemplateElement.src = photo;
      adSuitable.querySelector('.popup__photos').append(photoTemplateElement);
    });
  } else {
    adSuitable.querySelector('.popup__photos').remove();
  }
};

const renderAvatar = (adSuitable, avatar) => {
  if (avatar) {
    adSuitable.querySelector('.popup__avatar').src = avatar;
  } else {
    adSuitable.querySelector('.popup__avatar').remove();
  }
};

const renderAdSuitable = ({author, offer}) => {
  const adSuitable = similarAdSuitableTemplate.cloneNode(true);
  renderTitle(adSuitable, offer.title);
  renderAddress(adSuitable, offer.address);
  renderPrice(adSuitable, offer.price);
  renderType(adSuitable, offer.type);
  renderCapacity(adSuitable, offer.rooms, offer.guests);
  renderTime(adSuitable, offer.checkin, offer.checkout);
  renderFeatures(adSuitable, offer.features);
  renderDescription(adSuitable, offer.description);
  renderPhotos(adSuitable, offer.photos);
  renderAvatar(adSuitable, author.avatar);

  return adSuitable;
};

export {renderAdSuitable};
