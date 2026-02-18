var btn = document.getElementById('btn');
var body = document.body;

btn.addEventListener('click', function() {
  body.classList.toggle('dark');
  btn.textContent = body.classList.contains('dark') ? 'Светлая тема' : 'Тёмная тема';
});
