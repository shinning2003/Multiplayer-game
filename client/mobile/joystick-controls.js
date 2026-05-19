class VirtualJoystick {
  constructor(scene) {
    this.scene = scene;
    this.base = scene.add.circle(120, window.innerHeight - 120, 60, 0x222222, 0.5)
      .setScrollFactor(0)
      .setDepth(1000)
      .setInteractive();

    this.thumb = scene.add.circle(120, window.innerHeight - 120, 30, 0xff9800, 0.8)
      .setScrollFactor(0)
      .setDepth(1001);

    this.forceX = 0;
    this.forceY = 0;

    this.base.on('pointermove', (pointer) => {
      if (!pointer.isDown) return;

      const dx = pointer.x - this.base.x;
      const dy = pointer.y - this.base.y;

      this.forceX = Phaser.Math.Clamp(dx / 60, -1, 1);
      this.forceY = Phaser.Math.Clamp(dy / 60, -1, 1);

      this.thumb.x = this.base.x + dx * 0.5;
      this.thumb.y = this.base.y + dy * 0.5;
    });

    this.base.on('pointerup', () => {
      this.forceX = 0;
      this.forceY = 0;

      this.thumb.x = this.base.x;
      this.thumb.y = this.base.y;
    });
  }
}
