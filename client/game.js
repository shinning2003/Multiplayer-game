const socket = io('http://localhost:3000');

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 800 },
      debug: false
    }
  },
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);

let player;
let cursors;
let otherPlayers;

function preload() {
  this.load.image('ground', 'https://labs.phaser.io/assets/sprites/platform.png');
  this.load.image('player', 'https://labs.phaser.io/assets/sprites/phaser-dude.png');
}

function create() {
  const ground = this.physics.add.staticGroup();
  ground.create(400, window.innerHeight - 50, 'ground').setScale(2).refreshBody();

  player = this.physics.add.sprite(100, 450, 'player');
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  this.physics.add.collider(player, ground);

  cursors = this.input.keyboard.createCursorKeys();

  otherPlayers = this.physics.add.group();

  socket.on('currentPlayers', (players) => {
    Object.keys(players).forEach((id) => {
      if (id !== socket.id) {
        addOtherPlayer(this, players[id]);
      }
    });
  });

  socket.on('newPlayer', (playerInfo) => {
    addOtherPlayer(this, playerInfo);
  });

  socket.on('playerMoved', (playerInfo) => {
    otherPlayers.getChildren().forEach((otherPlayer) => {
      if (playerInfo.playerId === otherPlayer.playerId) {
        otherPlayer.setPosition(playerInfo.x, playerInfo.y);
      }
    });
  });

  socket.on('playerDisconnected', (playerId) => {
    otherPlayers.getChildren().forEach((otherPlayer) => {
      if (playerId === otherPlayer.playerId) {
        otherPlayer.destroy();
      }
    });
  });
}

function update() {
  if (cursors.left.isDown) {
    player.setVelocityX(-220);
  } else if (cursors.right.isDown) {
    player.setVelocityX(220);
  } else {
    player.setVelocityX(0);
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-500);
  }

  socket.emit('playerMovement', {
    x: player.x,
    y: player.y
  });
}

function addOtherPlayer(scene, playerInfo) {
  const otherPlayer = scene.add.sprite(playerInfo.x, playerInfo.y, 'player');
  otherPlayer.playerId = playerInfo.playerId;
  otherPlayers.add(otherPlayer);
}
