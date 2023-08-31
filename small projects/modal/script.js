const openBtn = document.querySelector("#openBtn")
const overlay = document.querySelector(".overlay")
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector("#closeBtn")

function closeModal() {
  overlay.classList.remove("open")
  modal.classList.remove("open")
}

openBtn.addEventListener("click", () => {
  overlay.classList.add("open")
  modal.classList.add("open")
})

closeBtn.addEventListener("click", () => {
  closeModal()
})

overlay.addEventListener("click", () => {
  closeModal()
})

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal()
  }
})
