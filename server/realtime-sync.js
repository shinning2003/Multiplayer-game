function syncPlayers(io, roomId, players) {
  io.to(roomId).emit('syncPlayers', players);
}

function broadcastNewPlayer(io, roomId, playerData) {
  io.to(roomId).emit('playerJoined', playerData);
}

function broadcastDisconnect(io, roomId, playerId) {
  io.to(roomId).emit('playerLeft', playerId);
}

module.exports = {
  syncPlayers,
  broadcastNewPlayer,
  broadcastDisconnect
};