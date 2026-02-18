var slides = document.querySelectorAll('.slide');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var counter = document.getElementById('counter');
var idx = 0;

function show() {
  slides.forEach(function(s, i) {
    s.classList.toggle('current', i === idx);
  });
  counter.textContent = (idx + 1) + ' / ' + slides.length;
}

prev.addEventListener('click', function() {
  idx = idx <= 0 ? slides.length - 1 : idx - 1;
  show();
});

next.addEventListener('click', function() {
  idx = idx >= slides.length - 1 ? 0 : idx + 1;
  show();
});

show();
