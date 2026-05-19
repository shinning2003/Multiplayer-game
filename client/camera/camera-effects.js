function setupCamera(scene, player) {
  scene.cameras.main.startFollow(player, true, 0.08, 0.08);
  scene.cameras.main.setZoom(1.2);
}

function cameraShake(scene) {
  scene.cameras.main.shake(200, 0.01);
}

function cameraFlash(scene) {
  scene.cameras.main.flash(300, 255, 255, 255);
}
