const audio = document.querySelector('audio');

window.addEventListener('load', () => {
  document.addEventListener('click', () => {
    audio.play();
  });
});

const element = document.querySelector('.element');

element.addEventListener('mouseover', function() {
  audio.play();
});

const homeHover = document.querySelector('.home-hover');

homeHover.addEventListener('mouseover', function() {
  audio.play();
});