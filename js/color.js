var body = document.body;

document.getElementById('red').onclick = function() { body.style.background = '#fcc'; };
document.getElementById('green').onclick = function() { body.style.background = '#cfc'; };
document.getElementById('blue').onclick = function() { body.style.background = '#ccf'; };
document.getElementById('reset').onclick = function() { body.style.background = ''; };
