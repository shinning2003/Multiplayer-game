function createParallaxBackground(scene) {
  const bg1 = scene.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, 'bg1')
    .setOrigin(0, 0);

  const bg2 = scene.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, 'bg2')
    .setOrigin(0, 0);

  scene.events.on('update', () => {
    bg1.tilePositionX += 0.2;
    bg2.tilePositionX += 0.5;
  });
}
