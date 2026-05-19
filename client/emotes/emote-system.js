const emotes = ['😀', '🔥', '😎', '😂', '💀'];

function showEmote(scene, player, emote) {
  const emoteText = scene.add.text(
    player.x,
    player.y - 60,
    emote,
    {
      fontSize: '42px'
    }
  );

  scene.tweens.add({
    targets: emoteText,
    y: player.y - 120,
    alpha: 0,
    duration: 1500,
    onComplete: () => {
      emoteText.destroy();
    }
  });
}
