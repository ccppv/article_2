var input = document.getElementById('input');
var list = document.getElementById('list');
var addBtn = document.getElementById('add');

function addItem() {
  var text = input.value.trim();
  if (!text) return;
  var li = document.createElement('li');
  li.innerHTML = '<span>' + text + '</span> <span class="del">×</span>';
  li.querySelector('.del').onclick = function() { li.remove(); };
  list.appendChild(li);
  input.value = '';
}

addBtn.addEventListener('click', addItem);
input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addItem();
});
