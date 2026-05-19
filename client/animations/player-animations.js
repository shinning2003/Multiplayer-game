function createPlayerAnimations(scene) {
  scene.anims.create({
    key: 'run',
    frames: scene.anims.generateFrameNumbers('playerSprite', {
      start: 0,
      end: 5
    }),
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: 'idle',
    frames: [{ key: 'playerSprite', frame: 0 }],
    frameRate: 1
  });

  scene.anims.create({
    key: 'jump',
    frames: [{ key: 'playerSprite', frame: 6 }],
    frameRate: 1
  });
}
