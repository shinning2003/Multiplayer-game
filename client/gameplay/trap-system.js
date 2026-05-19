class TrapSystem {
  constructor(scene) {
    this.scene = scene;
  }

  preload() {
    this.scene.load.image('spike', 'assets/traps/neon-spike.png');
  }

  create(player) {
    this.traps = this.scene.physics.add.staticGroup();

    this.traps.create(700, 860, 'spike');
    this.traps.create(1200, 460, 'spike');

    this.scene.physics.add.collider(
      player,
      this.traps,
      this.hitTrap,
      null,
      this
    );
  }

  hitTrap(player) {
    player.setTint(0xff0000);
    player.setVelocityY(-350);

    setTimeout(() => {
      player.clearTint();
    }, 500);
  }
}

window.TrapSystem = TrapSystem;
