function enableFullscreen() {
  const doc = document.documentElement;

  if (doc.requestFullscreen) {
    doc.requestFullscreen();
  } else if (doc.webkitRequestFullscreen) {
    doc.webkitRequestFullscreen();
  } else if (doc.msRequestFullscreen) {
    doc.msRequestFullscreen();
  }
}

window.addEventListener('load', () => {
  setTimeout(() => {
    enableFullscreen();
  }, 1000);
});
