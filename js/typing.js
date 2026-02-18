var out = document.getElementById('out');
var text = 'Привет! Это текст появляется по одной букве.';
var i = 0;

function type() {
  if (i < text.length) {
    out.textContent += text[i];
    i++;
    setTimeout(type, 80);
  }
}

document.getElementById('btn').addEventListener('click', function() {
  out.textContent = '';
  i = 0;
  type();
});

type();
