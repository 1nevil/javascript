let todos = JSON.parse(localStorage.getItem("todo-datas")) || []
const input = document.querySelector("#input")
const submitBtn = document.querySelector("#addBtn")
const template = document.querySelector("template")
const lists = document.querySelector("#lists")
const spanCount = document.querySelector("#checkedCount")
let editIndex

spanCount.innerText = 0

function setLocalStorage() {
  localStorage.setItem("todo-datas", JSON.stringify(todos))
}

function addtodos(task) {
  const templateClone = template.content.cloneNode(true)
  const span = templateClone.querySelector(".span")
  const checkbox = templateClone.querySelector(".checkBox")
  const deleteBtn = templateClone.querySelector(".delete")
  const editBtn = templateClone.querySelector(".edit")

  span.innerText = task.name
  checkbox.checked = task.checked

  deleteBtn.addEventListener("click", () => removeTask(task))
  editBtn.addEventListener("click", () => editTask(task))

  lists.append(templateClone)
  input.value = ""
}

function removeTask(task) {
  todos = todos.filter((todo) => todo.name !== task.name)
  setLocalStorage()
  displayTodos()
}

function editTask(task) {
  input.value = task.name
  editIndex = todos.findIndex((todo) => todo.name === task.name)
  submitBtn.value = "edit"
}

function displayTodos() {
  lists.innerHTML = ""
  todos.forEach((todo) => {
    addtodos(todo)
  })
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault()

  if (submitBtn.value === "edit") {
    todos[editIndex].name = input.value
    setLocalStorage()
    submitBtn.value = "add"
  } else {
    const todoName = input.value.trim()
    if (todoName !== "") {
      todos.push({ name: todoName, checked: false })
      setLocalStorage()
    }
  }

  displayTodos()
})

lists.addEventListener("change", (e) => {
  if (!e.target.matches(".checkBox")) return
  const spanText = e.target.parentNode.querySelector(".span").innerText
  const task = todos.find((todo) => todo.name === spanText)
  task.checked = e.target.checked
  spanText.style.setLocalStorage()
})

displayTodos()

lists.addEventListener("change", (e) => {
  if (!e.target.matches(".checkBox")) return

  checkboxs = document.querySelectorAll(".checkBox")

  let checkedCount = 0
  checkboxs.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedCount++
    }
  })

  spanCount.innerText = checkedCount
})
