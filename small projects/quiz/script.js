const ANSWERS = ["hi", "recursion", "element.dataset.count"]
const lists = document.querySelectorAll(".question-item")
console.log("🚀 ~ file: script.js:3 ~ lists:", lists)
const button = document.querySelector("#btnSubmit")
const alert = document.querySelector("#alert")

button.addEventListener("click", (e) => {
  let rightAns = 0
  e.preventDefault()
  e.stopPropagation()
  const checkedRadios = document.querySelectorAll("input[type='radio']:checked")
  checkedRadios.forEach((radio, index) => {
    if (radio.value == ANSWERS[index]) {
      const rightAnsList = lists[index]
      rightAnsList.style.color = "green"
      ++rightAns
    } else {
      const wrongAnsList = lists[index]
      wrongAnsList.style.color = "red"
    }
  })
  if (rightAns === lists.length) {
    alert.classList.add("show")
  }
})
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    alert.classList.remove("show")
  }
})
