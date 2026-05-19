function createJumpEffect(scene, x, y) {
  const particles = scene.add.particles('spark');

  particles.createEmitter({
    x,
    y,
    speed: { min: -120, max: 120 },
    scale: { start: 0.5, end: 0 },
    blendMode: 'ADD',
    lifespan: 400,
    quantity: 15
  });

  setTimeout(() => {
    particles.destroy();
  }, 500);
}

function createCoinEffect(scene, x, y) {
  const particles = scene.add.particles('spark');

  particles.createEmitter({
    x,
    y,
    speed: { min: -200, max: 200 },
    scale: { start: 0.8, end: 0 },
    lifespan: 600,
    quantity: 20
  });

  setTimeout(() => {
    particles.destroy();
  }, 700);
}
