const vibrate = () => {
  window.navigator.vibrate(100);
  console.log('vibrate');
};

const start = () => {
  setInterval(100, vibrate());
};