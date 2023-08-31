const wallpaperimg = document.querySelector("#wallpaper")
const buildingimg = document.querySelector("#building")
const mountainimg = document.querySelector("#mountain")
const model = document.querySelector("#model")
const closeModelBtn = document.querySelector("#closeModel")

function setImage(e) {
  const modelImage = model.children[0]
  modelImage.src = e.target.src
  model.classList.remove("hide")
}

wallpaperimg.addEventListener("click", (e) => {
  setImage(e)
})

buildingimg.addEventListener("click", (e) => {
  setImage(e)
})

mountainimg.addEventListener("click", (e) => {
  setImage(e)
})

closeModelBtn.addEventListener("click", () => {
  model.classList.add("hide")
})
