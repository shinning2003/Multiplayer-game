function optimizeForMobile(game) {
  if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
    game.scale.resize(window.innerWidth, window.innerHeight);

    game.config.physics.arcade.debug = false;

    console.log('Mobile optimization enabled');
  }
}

window.addEventListener('resize', () => {
  if (window.game) {
    window.game.scale.resize(window.innerWidth, window.innerHeight);
  }
});
