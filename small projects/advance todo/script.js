//add todo
//delete todo
//mark as completed todo
//auto save todo
//automaticaly render todo

const form = document.querySelector("#new-todo-form")
const list = document.querySelector("#list")
const input = document.querySelector("#todo-input")
const template = document.querySelector("template")
const LOCAL_STORAGE_PREFIX = "ADVANCE_TODO_LIST"
const LOCAL_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`
let todos = loadTodos() || []
todos.forEach((todo) => renderTodo(todo)) // or todos.forEach(renderTodo) work same

list.addEventListener("change", (e) => {
  //change when text and checkbox checked
  if (!e.target.matches("[data-list-item-checkbox]")) return

  //get todo on click
  const parent = e.target.closest(".list-item")
  const todoId = parent.dataset.todoId
  const todo = todos.find((todo) => {
    return todo.id === todoId
  })

  //change completed status
  todo.complete = e.target.checked

  //save todo
  saveTodos()
})

textElement.addEventListener("dblclick", (e) => {
  const parent = e.target.closest(".list-item")
  const todoId = parent.dataset.todoId
  const todo = todos.find((todo) => todo.id === todoId)
  const newText = prompt("Enter new todo text", todo.name)
  if (newText !== null) {
    todo.name = newText
    saveTodos()
  }
})

list.addEventListener("click", (e) => {
  //change when text and checkbox checked
  if (!e.target.matches("[data-button-delete]")) return

  //get button on click
  const parent = e.target.closest(".list-item")

  //remove todo from screen
  parent.remove()

  //remove todo from list
  const todoId = parent.dataset.todoId
  todos = todos.filter((todo) => todo.id !== todoId)

  //save todo
  saveTodos()
})

form.addEventListener("submit", (e) => {
  e.preventDefault()
  e.stopPropagation()

  const todoName = input.value
  // if (todoName === "") return

  const todo = {
    name: todoName,
    complete: false,
    id: new Date().valueOf().toString(),
  }
  renderTodo(todo)
  todos.push(todo)
  saveTodos()
  input.value = ""
})

function renderTodo(todo) {
  const templateClone = template.content.cloneNode(true)
  const listItem = templateClone.querySelector(".list-item")
  listItem.dataset.todoId = todo.id
  const textElement = templateClone.querySelector("[data-list-item-text]")
  const editableTextElement = document.createElement("span")
  editableTextElement.contentEditable = true
  editableTextElement.innerText = todo.name
  textElement.appendChild(editableTextElement)
  const checkbox = templateClone.querySelector("[data-list-item-checkbox]")
  checkbox.checked = todo.complete
  list.appendChild(templateClone)
}

function saveTodos() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}

function loadTodos() {
  const allTodos = localStorage.getItem(LOCAL_STORAGE_KEY)
  return JSON.parse(allTodos)
}
