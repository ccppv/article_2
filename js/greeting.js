var input = document.getElementById('name');
var btn = document.getElementById('btn');
var out = document.getElementById('out');

btn.addEventListener('click', function() {
  var name = input.value.trim();
  out.textContent = name ? 'Привет, ' + name + '!' : 'Напиши имя.';
});
