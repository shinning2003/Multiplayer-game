class LiveGameScene extends Phaser.Scene {
  constructor() {
    super('LiveGameScene');
  }

  preload() {
    this.load.image('bg', 'assets/backgrounds/neon-city.png');
    this.load.image('platform', 'assets/platforms/neon-platform.png');
    this.load.spritesheet('player', 'assets/characters/cyber-runner.png', {
      frameWidth: 128,
      frameHeight: 128
    });
  }

  create() {
    this.add.image(960, 540, 'bg').setScale(1.2);

    const platforms = this.physics.add.staticGroup();

    platforms.create(900, 900, 'platform').setScale(2).refreshBody();
    platforms.create(500, 650, 'platform');
    platforms.create(1400, 500, 'platform');

    this.player = this.physics.add.sprite(800, 400, 'player');
    this.player.setBounce(0.15);
    this.player.setCollideWorldBounds(true);

    this.physics.add.collider(this.player, platforms);

    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('player', {
        start: 0,
        end: 7
      }),
      frameRate: 12,
      repeat: -1
    });

    this.cameras.main.startFollow(this.player, true, 0.08, 0.08);
    this.cameras.main.setZoom(1.15);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-260);
      this.player.play('run', true);
      this.player.flipX = true;
    }
    else if (this.cursors.right.isDown) {
      this.player.setVelocityX(260);
      this.player.play('run', true);
      this.player.flipX = false;
    }
    else {
      this.player.setVelocityX(0);
      this.player.anims.stop();
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-620);
    }
  }
}

window.LiveGameScene = LiveGameScene;
