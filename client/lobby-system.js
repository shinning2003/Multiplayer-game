const rooms = {};

function createRoom(roomId) {
  rooms[roomId] = {
    players: [],
    maxPlayers: 5
  };

  console.log('Room created:', roomId);
}

function joinRoom(roomId, playerName) {
  if (!rooms[roomId]) {
    createRoom(roomId);
  }

  if (rooms[roomId].players.length < rooms[roomId].maxPlayers) {
    rooms[roomId].players.push(playerName);
    console.log(playerName + ' joined ' + roomId);
  } else {
    console.log('Room full');
  }
}
