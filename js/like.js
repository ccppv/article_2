var like = document.getElementById('like');
var icon = like.querySelector('.icon');
var countEl = document.getElementById('count');
var count = 0;
var active = false;

like.addEventListener('click', function() {
  active = !active;
  count += active ? 1 : -1;
  like.classList.toggle('active', active);
  icon.textContent = active ? '♥' : '♡';
  countEl.textContent = count;
});
