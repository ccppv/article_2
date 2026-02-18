var items = document.querySelectorAll('.item h3');

items.forEach(function(h3) {
  h3.addEventListener('click', function() {
    var item = h3.closest('.item');
    var wasOpen = item.classList.contains('open');
    document.querySelectorAll('.item').forEach(function(i) { i.classList.remove('open'); });
    if (!wasOpen) item.classList.add('open');
  });
});

document.querySelector('.item').classList.add('open');
