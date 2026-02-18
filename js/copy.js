var text = document.getElementById('text');
var btn = document.getElementById('btn');
var feedback = document.getElementById('feedback');

btn.addEventListener('click', function() {
  text.select();
  try {
    document.execCommand('copy');
    feedback.textContent = 'Скопировано!';
    setTimeout(function() { feedback.textContent = ''; }, 2000);
  } catch (e) {
    feedback.textContent = 'Не получилось скопировать.';
  }
});
