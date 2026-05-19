function showGameOver(scene, winnerName) {
  const overlay = scene.add.rectangle(
    window.innerWidth / 2,
    window.innerHeight / 2,
    window.innerWidth,
    window.innerHeight,
    0x000000,
    0.7
  );

  const text = scene.add.text(
    window.innerWidth / 2 - 150,
    window.innerHeight / 2,
    winnerName + ' Wins!',
    {
      fontSize: '48px',
      fill: '#ffffff'
    }
  );

  return {
    overlay,
    text
  };
}
