const audio = document.querySelector('audio');

window.addEventListener('load', () => {
  document.addEventListener('click', () => {
    audio.play();
  });
});