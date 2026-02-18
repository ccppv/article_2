var timeEl = document.getElementById('time');
var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById('reset');

var sec = 0;
var timer = null;

function format(t) {
  var m = Math.floor(t / 60);
  var s = t % 60;
  return m + ':' + (s < 10 ? '0' : '') + s;
}

function tick() {
  sec++;
  timeEl.textContent = format(sec);
}

startBtn.addEventListener('click', function() {
  if (timer) return;
  timer = setInterval(tick, 1000);
});

stopBtn.addEventListener('click', function() {
  clearInterval(timer);
  timer = null;
});

resetBtn.addEventListener('click', function() {
  clearInterval(timer);
  timer = null;
  sec = 0;
  timeEl.textContent = format(0);
});
