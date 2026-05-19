function createHUD(scene) {
  const coinsText = scene.add.text(20, 20, 'Coins: 0', {
    fontSize: '24px',
    fill: '#ffffff'
  });

  const playersText = scene.add.text(20, 60, 'Players: 1/5', {
    fontSize: '24px',
    fill: '#ffffff'
  });

  const timerText = scene.add.text(20, 100, 'Time: 0', {
    fontSize: '24px',
    fill: '#ffffff'
  });

  return {
    coinsText,
    playersText,
    timerText
  };
}
