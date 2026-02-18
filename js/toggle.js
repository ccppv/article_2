var btn = document.getElementById('btn');
var text = document.getElementById('text');

btn.addEventListener('click', function() {
  text.classList.toggle('hidden');
  btn.textContent = text.classList.contains('hidden') ? 'Показать' : 'Скрыть';
});
