function start() {
  setInterval(100, vibrate());
}

const vibrate = () => {
  window.navigator.vibrate(100);
  console.log(vibrate);
};