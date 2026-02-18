var btn = document.getElementById('btn');
var valueEl = document.getElementById('value');
var count = 0;

btn.addEventListener('click', function() {
  count++;
  valueEl.textContent = count;
});
