class CharacterSystem {
  constructor(scene) {
    this.scene = scene;
  }

  preload() {
    this.scene.load.spritesheet(
      'cyberRunner',
      'assets/characters/cyber-runner.png',
      {
        frameWidth: 128,
        frameHeight: 128
      }
    );
  }

  createAnimations() {
    this.scene.anims.create({
      key: 'run',
      frames: this.scene.anims.generateFrameNumbers('cyberRunner', {
        start: 0,
        end: 7
      }),
      frameRate: 12,
      repeat: -1
    });

    this.scene.anims.create({
      key: 'idle',
      frames: [{ key: 'cyberRunner', frame: 0 }],
      frameRate: 1
    });
  }

  createPlayer(x, y) {
    const player = this.scene.physics.add.sprite(x, y, 'cyberRunner');

    player.setScale(0.8);
    player.play('idle');

    return player;
  }
}

window.CharacterSystem = CharacterSystem;
