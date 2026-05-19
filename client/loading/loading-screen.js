function showLoadingScreen(scene) {
  const loadingText = scene.add.text(
    window.innerWidth / 2 - 120,
    window.innerHeight / 2,
    'Loading Match...',
    {
      fontSize: '42px',
      fill: '#ffffff'
    }
  );

  scene.tweens.add({
    targets: loadingText,
    alpha: 0.3,
    duration: 800,
    yoyo: true,
    repeat: -1
  });

  return loadingText;
}
