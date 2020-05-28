function watchForHover() {
  var hasHoverClass = false;
  var container = document.body;
  var lastTouchTime = 0;

  function enableHover() {
    if (new Date() - lastTouchTime < 500) return;
    if (hasHoverClass) return;

    container.className += ' hasHover';
    hasHoverClass = true;
  }

  function disableHover() {
    if (!hasHoverClass) return;

    container.className = container.className.replace(' hasHover', '');
    hasHoverClass = false;
  }

  function updateLastTouchTime() {
    lastTouchTime = new Date();
  }

  document.addEventListener('touchstart', updateLastTouchTime, true);
  document.addEventListener('touchstart', disableHover, true);
  document.addEventListener('mousemove', enableHover, true);

  enableHover();
}

watchForHover();