let currentWidth = 100;
const maxWidth = 640;
const div1 = document.getElementById('div1');

function animate() {
  currentWidth = currentWidth + 3;
  // div1.setAttribute('width', currentWidth + 'px');
  div1.style.cssText = `width: ${ currentWidth }px`;
  if (currentWidth < maxWidth) {
    window.requestAnimationFrame(animate);
  }
}

animate();
