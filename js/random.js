document.getElementById('btn').addEventListener('click', function() {
  var n = Math.floor(Math.random() * 100) + 1;
  document.getElementById('result').textContent = n;
});
