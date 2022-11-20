const fileTypes = [
  'jpg',
  'jpeg',
  'png'
];

const fileAvatar = document.querySelector('#avatar');
const imageAvatar = document.querySelector('#avatar-image');
const fileApartment = document.querySelector('#images');
const imageApartment = document.querySelector('#apartment-image');

const displayPhoto = (fileField, image) => {
  const file = fileField.files[0];
  const fileName = file.name.toLowerCase();

  const matches = fileTypes.some((it) => fileName.endsWith(it));

  if (matches) {
    image.src = URL.createObjectURL(file);
  }
};

const initPreview = () => {
  fileAvatar.addEventListener('change', () => displayPhoto(fileAvatar, imageAvatar));
  fileApartment.addEventListener('change', () => displayPhoto(fileApartment, imageApartment));
};

const resetPhotos = () => {
  imageAvatar.src = 'img/muffin-grey.svg';
  imageApartment.src = 'img/muffin-grey.svg';
};

export {initPreview, resetPhotos};
