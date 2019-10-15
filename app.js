loadEvents = () => {
  document.querySelector('form').addEventListener('submit', submit)
  document.getElementById('clear').addEventListener('click', clearTask)
}

submit = e => {
  e.preventDefault()
  let input = document.querySelector('input')
  if(input.value != '')
    addTask(input.value)
  input.value = ''
}

addTask = task => {
  let ul = document.querySelector('ul')
  let li = document.createElement('li')
  li.innerHTML = `
    <span class="delete">×</span>
    <input type="checkbox">
      <label>${task}</label>
  `
  ul.appendChild(li);
  document.querySelector('.tasksBoard').style.display = 'block'
}

clearTask = () => {
  let ul = document.querySelector('ul').innerHTML = ''
}

loadEvents();
