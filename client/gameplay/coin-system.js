class CoinSystem {
  constructor(scene) {
    this.scene = scene;
    this.coinsCollected = 0;
  }

  preload() {
    this.scene.load.image('coin', 'assets/items/neon-coin.png');
  }

  create(platforms, player) {
    this.coins = this.scene.physics.add.group();

    const positions = [
      { x: 450, y: 500 },
      { x: 900, y: 350 },
      { x: 1400, y: 250 }
    ];

    positions.forEach(pos => {
      const coin = this.coins.create(pos.x, pos.y, 'coin');
      coin.setScale(0.5);
      coin.body.allowGravity = false;
    });

    this.scene.physics.add.overlap(
      player,
      this.coins,
      this.collectCoin,
      null,
      this
    );
  }

  collectCoin(player, coin) {
    coin.destroy();
    this.coinsCollected++;

    console.log('Coins:', this.coinsCollected);
  }
}

window.CoinSystem = CoinSystem;
