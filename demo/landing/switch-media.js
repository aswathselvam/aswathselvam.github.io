const imageContainer = document.querySelector('.image-container');
const image = imageContainer.querySelector('img');
const videoContainer = imageContainer.querySelector('.video-container');

imageContainer.addEventListener('mouseover', () => {
  image.style.display = 'none';
  videoContainer.style.display = 'block';
});

imageContainer.addEventListener('mouseout', () => {
  image.style.display = 'block';
  videoContainer.style.display = 'none';
});