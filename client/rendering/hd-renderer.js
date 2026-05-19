class HDRenderer {
  constructor(scene) {
    this.scene = scene;
    this.enableLighting();
    this.enableShaders();
  }

  enableLighting() {
    this.scene.lights.enable();
    this.scene.lights.setAmbientColor(0x555555);

    this.mainLight = this.scene.lights.addLight(
      400,
      200,
      500,
      0x6d28d9,
      2
    );
  }

  followPlayer(player) {
    this.scene.events.on('update', () => {
      this.mainLight.x = player.x;
      this.mainLight.y = player.y - 100;
    });
  }

  enableShaders() {
    this.scene.cameras.main.setRenderToTexture();
  }
}

window.HDRenderer = HDRenderer;
