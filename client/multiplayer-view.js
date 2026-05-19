function renderOtherPlayers(scene, players) {
  Object.keys(players).forEach((id) => {
    const data = players[id];

    let existingPlayer = scene.children.list.find(
      obj => obj.playerId === id
    );

    if (!existingPlayer) {
      const newPlayer = scene.add.sprite(data.x, data.y, 'player');
      newPlayer.playerId = id;
    } else {
      existingPlayer.setPosition(data.x, data.y);
    }
  });
}

function removeDisconnectedPlayer(scene, playerId) {
  const player = scene.children.list.find(
    obj => obj.playerId === playerId
  );

  if (player) {
    player.destroy();
  }
}
