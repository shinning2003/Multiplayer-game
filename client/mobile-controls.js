const mobileControls = {
  left: false,
  right: false,
  jump: false
};

function createMobileControls() {
  const controls = document.createElement('div');
  controls.innerHTML = `
    <div id="leftBtn" style="position:fixed;bottom:20px;left:20px;width:70px;height:70px;background:#333;border-radius:50%;opacity:0.7;z-index:9999"></div>
    <div id="rightBtn" style="position:fixed;bottom:20px;left:110px;width:70px;height:70px;background:#333;border-radius:50%;opacity:0.7;z-index:9999"></div>
    <div id="jumpBtn" style="position:fixed;bottom:20px;right:20px;width:90px;height:90px;background:#ff9800;border-radius:50%;opacity:0.8;z-index:9999"></div>
  `;

  document.body.appendChild(controls);

  const leftBtn = document.getElementById('leftBtn');
  const rightBtn = document.getElementById('rightBtn');
  const jumpBtn = document.getElementById('jumpBtn');

  leftBtn.ontouchstart = () => mobileControls.left = true;
  leftBtn.ontouchend = () => mobileControls.left = false;

  rightBtn.ontouchstart = () => mobileControls.right = true;
  rightBtn.ontouchend = () => mobileControls.right = false;

  jumpBtn.ontouchstart = () => mobileControls.jump = true;
  jumpBtn.ontouchend = () => mobileControls.jump = false;
}

createMobileControls();