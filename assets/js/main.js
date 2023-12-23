const $input = document.getElementById('input'),
  $button = document.getElementById('button'),
  $list = document.getElementById('list')

$button.addEventListener('click', (ev) => {
  if ($input.value === '') {
    alert('Debes gregar alguna tarea')
  } else {
    const $li = document.createElement('li'),
      $p = document.createElement('p'),
      $span = document.createElement('span')

    $p.textContent = $input.value
    $span.textContent = 'Borrar'

    $li.append($p, $span)
    $list.append($li)
  }
})

$list.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    e.target.parentNode.remove()
  }

  if (e.target.tagName === 'P') {
  }
})
