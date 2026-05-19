function startMatchCountdown(scene, callback) {
  let count = 3;

  const text = scene.add.text(
    window.innerWidth / 2,
    window.innerHeight / 2,
    count,
    {
      fontSize: '96px',
      fill: '#ffffff'
    }
  ).setOrigin(0.5);

  const interval = setInterval(() => {
    count--;

    if (count > 0) {
      text.setText(count);
    } else {
      text.setText('GO!');

      setTimeout(() => {
        text.destroy();
        callback();
      }, 1000);

      clearInterval(interval);
    }
  }, 1000);
}
