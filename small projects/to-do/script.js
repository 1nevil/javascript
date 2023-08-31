const input = document.querySelector("input")
const button = document.querySelector("button")
const ul = document.querySelector("ul")
const span = document.querySelector("span")
const lists = document.querySelectorAll("ul >li")

button.addEventListener("click", () => {
  span.innerText = ""
  const li = document.createElement("li")

  if (input.value !== "") {
    li.innerText = input.value
    ul.appendChild(li)
    input.value = ""
    input.focus()
    li.addEventListener("click", (e) => {
      li.remove()
    })
  } else {
    span.innerText = "Input Feild is required"
    span.style.color = "red"
    input.focus()
  }
})
