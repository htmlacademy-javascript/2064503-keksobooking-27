const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileAvatar = document.querySelector('#avatar');
const imageAvatar = document.querySelector('#avatar-image');
const fileApartment = document.querySelector('#images');
const imageApartment = document.querySelector('#apartment-image');

const onDisplayPhoto = (fileField, image) => {
  const file = fileField.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    image.src = URL.createObjectURL(file);
  }
};

const renderPhotos = () => {
  fileAvatar.addEventListener('change', () => onDisplayPhoto(fileAvatar, imageAvatar));
  fileApartment.addEventListener('change', () => onDisplayPhoto(fileApartment, imageApartment));
};

const resetPhotos = () => {
  imageAvatar.src = 'img/muffin-grey.svg';
  imageApartment.src = 'img/muffin-grey.svg';
};

export {renderPhotos, resetPhotos};
