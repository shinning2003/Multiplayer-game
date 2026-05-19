const weatherEffects = {
  rain: false,
  fog: false,
  night: false
};

function enableRain(scene) {
  weatherEffects.rain = true;

  const particles = scene.add.particles('rain');

  particles.createEmitter({
    x: { min: 0, max: window.innerWidth },
    y: 0,
    speedY: { min: 400, max: 700 },
    lifespan: 1200,
    quantity: 8,
    scale: { start: 0.3, end: 0.1 }
  });
}

function enableNight(scene) {
  weatherEffects.night = true;

  const overlay = scene.add.rectangle(
    0,
    0,
    window.innerWidth,
    window.innerHeight,
    0x000022,
    0.3
  );

  overlay.setOrigin(0, 0);
}
