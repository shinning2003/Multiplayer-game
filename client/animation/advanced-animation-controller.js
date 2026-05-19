class AdvancedAnimationController {
  constructor(player) {
    this.player = player;
  }

  update() {
    if (this.player.body.velocity.x !== 0) {
      this.player.play('run', true);
    } else {
      this.player.play('idle', true);
    }

    if (!this.player.body.touching.down) {
      this.player.play('jump', true);
    }
  }

  triggerCelebrate() {
    this.player.play('celebrate', true);
  }

  triggerAttack() {
    this.player.play('attack', true);
  }
}

window.AdvancedAnimationController = AdvancedAnimationController;
