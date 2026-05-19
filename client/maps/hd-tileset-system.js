class HDTilemapSystem {
  constructor(scene) {
    this.scene = scene;
  }

  preload() {
    this.scene.load.image('neonTiles', 'assets/maps/neon-tileset.png');
    this.scene.load.tilemapTiledJSON('cityMap', 'assets/maps/city-map.json');
  }

  create() {
    const map = this.scene.make.tilemap({ key: 'cityMap' });

    const tileset = map.addTilesetImage('neon-tileset', 'neonTiles');

    const groundLayer = map.createLayer('Ground', tileset);

    groundLayer.setCollisionByProperty({ collides: true });

    return {
      map,
      groundLayer
    };
  }
}

window.HDTilemapSystem = HDTilemapSystem;
