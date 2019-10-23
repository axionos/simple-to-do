const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('../index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

loadEvents = () => {
  document.querySelector('form').addEventListener('submit', submit)
  document.getElementById('clear').addEventListener('click', clearTask)
  document.querySelector('ul').addEventListener('click', deleteOrTick)
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

deleteOrTick = e => {
  if(e.target.className === 'delete'){
    deleteTask(e)
  } else {
    tickTask(e)
  }
}

deleteTask = e => {
  console.log(e.target)
  const task = e.target.parentElement
  task.remove()
}

tickTask =  e => {
  const task = e.target.nextElementSibling
  if (e.target.checked) {
    task.style.textDecoration = 'line-through'
    task.style.color = '#9b9b9b'
  } else {
    task.style.textDecoration = 'none'
    task.style.color = '#000'
  }
}

loadEvents();
