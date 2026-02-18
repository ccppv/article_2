var overlay = document.getElementById('overlay');
var openBtn = document.getElementById('open');
var closeBtn = document.getElementById('close');

openBtn.addEventListener('click', function() { overlay.classList.add('open'); });
closeBtn.addEventListener('click', function() { overlay.classList.remove('open'); });
overlay.addEventListener('click', function(e) {
  if (e.target === overlay) overlay.classList.remove('open');
});
