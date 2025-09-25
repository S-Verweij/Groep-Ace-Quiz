const music = document.getElementById('bg-music');
const toggleBtn = document.getElementById('toggle-music');

music.volume = 0.2; // zachter volume

toggleBtn.addEventListener('click', () => {
  if (!music.paused) {
    music.pause();
    toggleBtn.innerHTML = '<img class="sound-icon" src="img/sound-icon-muted.png" alt="muziek aan/uit"> Speel muziek';
  } else {
    music.play();
    toggleBtn.innerHTML = '<img class="sound-icon" src="img/sound-icon.png" alt="muziek aan/uit"> Stop muziek';
  }
});