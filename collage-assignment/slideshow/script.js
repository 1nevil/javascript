let counter = 0
const images = ["bulding.jpg", "mountain.jpg", "wallpaper.png"]
const image = document.querySelector("#image")
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")

// setInterval(() => {
//   if (counter == 0 || counter == 1) {
//     counter++
//   } else {
//     counter--
//   }
//   console.log(counter)
//   image.src = `imgs\\${images[counter]}`
// }, 1000)

setImage()

function setImage() {
  image.src = `imgs\\${images[counter]}`
}

prevBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--
    setImage()
  }
})

nextBtn.addEventListener("click", () => {
  if (counter < images.length - 1) {
    counter++
    setImage()
  }
})
