const gameAudio = {
  jump: new Audio('assets/audio/jump.mp3'),
  coin: new Audio('assets/audio/coin.mp3'),
  win: new Audio('assets/audio/win.mp3')
};

function playSound(sound) {
  if (gameAudio[sound]) {
    gameAudio[sound].play();
  }
}
