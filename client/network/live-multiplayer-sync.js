class LiveMultiplayerSync {
  constructor(scene) {
    this.scene = scene;
    this.socket = io();
    this.players = {};
  }

  connect(playerData) {
    this.socket.emit('joinGame', playerData);

    this.socket.on('currentPlayers', (players) => {
      Object.keys(players).forEach(id => {
        this.addPlayer(id, players[id]);
      });
    });

    this.socket.on('playerJoined', (data) => {
      this.addPlayer(data.id, data);
    });

    this.socket.on('playerMoved', (data) => {
      if (this.players[data.id]) {
        this.players[data.id].setPosition(data.x, data.y);
      }
    });

    this.socket.on('playerLeft', (id) => {
      if (this.players[id]) {
        this.players[id].destroy();
        delete this.players[id];
      }
    });
  }

  addPlayer(id, data) {
    if (this.players[id]) return;

    const player = this.scene.add.sprite(data.x, data.y, 'player');
    player.setScale(0.8);

    this.players[id] = player;
  }

  syncMovement(player) {
    this.socket.emit('move', {
      x: player.x,
      y: player.y
    });
  }
}

window.LiveMultiplayerSync = LiveMultiplayerSync;
