const gameRooms = {};

function createGameRoom(roomId) {
  gameRooms[roomId] = {
    players: {}
  };
}

function addPlayerToRoom(roomId, socketId, playerData) {
  if (!gameRooms[roomId]) {
    createGameRoom(roomId);
  }

  gameRooms[roomId].players[socketId] = playerData;
}

function updatePlayer(roomId, socketId, movementData) {
  if (!gameRooms[roomId]) return;
  if (!gameRooms[roomId].players[socketId]) return;

  gameRooms[roomId].players[socketId].x = movementData.x;
  gameRooms[roomId].players[socketId].y = movementData.y;
}

function removePlayer(roomId, socketId) {
  if (!gameRooms[roomId]) return;

  delete gameRooms[roomId].players[socketId];
}

module.exports = {
  gameRooms,
  createGameRoom,
  addPlayerToRoom,
  updatePlayer,
  removePlayer
};