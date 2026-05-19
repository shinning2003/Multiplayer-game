class TouchGameplayControls {
  constructor(scene, player) {
    this.scene = scene;
    this.player = player;

    this.leftPressed = false;
    this.rightPressed = false;
    this.jumpPressed = false;

    this.createButtons();
  }

  createButtons() {
    const left = this.scene.add.circle(120, 920, 55, 0xffffff, 0.15)
      .setScrollFactor(0)
      .setInteractive();

    const right = this.scene.add.circle(260, 920, 55, 0xffffff, 0.15)
      .setScrollFactor(0)
      .setInteractive();

    const jump = this.scene.add.circle(1750, 900, 70, 0xff9800, 0.35)
      .setScrollFactor(0)
      .setInteractive();

    left.on('pointerdown', () => this.leftPressed = true);
    left.on('pointerup', () => this.leftPressed = false);

    right.on('pointerdown', () => this.rightPressed = true);
    right.on('pointerup', () => this.rightPressed = false);

    jump.on('pointerdown', () => this.jumpPressed = true);
    jump.on('pointerup', () => this.jumpPressed = false);
  }

  update() {
    if (this.leftPressed) {
      this.player.setVelocityX(-260);
    }
    else if (this.rightPressed) {
      this.player.setVelocityX(260);
    }
    else {
      this.player.setVelocityX(0);
    }

    if (this.jumpPressed && this.player.body.touching.down) {
      this.player.setVelocityY(-620);
    }
  }
}

window.TouchGameplayControls = TouchGameplayControls;
