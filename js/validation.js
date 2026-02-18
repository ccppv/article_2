var form = document.getElementById('form');
var msg = document.getElementById('msg');
var email = document.getElementById('email');
var pass = document.getElementById('pass');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  msg.textContent = '';
  email.classList.remove('error');
  pass.classList.remove('error');

  var hasError = false;
  if (!email.value.includes('@')) {
    msg.textContent = 'Введи корректный email.';
    email.classList.add('error');
    hasError = true;
  }
  if (pass.value.length < 6) {
    msg.textContent = msg.textContent || '';
    if (hasError) msg.textContent += ' ';
    msg.textContent += 'Пароль не меньше 6 символов.';
    pass.classList.add('error');
    hasError = true;
  }
  if (!hasError) msg.textContent = 'Всё ок, форма прошла проверку.';
});
