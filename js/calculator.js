var a = document.getElementById('a');
var b = document.getElementById('b');
var op = document.getElementById('op');
var btn = document.getElementById('btn');
var result = document.getElementById('result');

btn.addEventListener('click', function() {
  var x = Number(a.value);
  var y = Number(b.value);
  var r;
  switch (op.value) {
    case '+': r = x + y; break;
    case '-': r = x - y; break;
    case '*': r = x * y; break;
    case '/': r = y !== 0 ? x / y : '∞'; break;
    default: r = '?';
  }
  result.textContent = 'Результат: ' + r;
});
