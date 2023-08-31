const divs = document.querySelectorAll("div")

divs.forEach((div) => {
  div.addEventListener("click", () => {
    let Key = div.dataset.container
    const audio = document.querySelector(`audio[data-sound="${Key}"]`)
    audio.play()
    console.log(
      "🚀 ~ file: script.js:10 ~ div.addEventListener ~ audio:",
      audio
    )
    audio.currentTime = 0
    audio.play()
    div.classList.add("playing")
    setTimeout(() => {
      div.classList.remove("playing")
      audio.paused()
    }, 500)
  })
})

window.addEventListener("keydown", (e) => {
  let Key = e.key
  const audio = document.querySelector(
    `audio[data-sound="${Key.toLowerCase()}"]`
  )
  const div = document.querySelector(
    `div[data-container="${Key.toLowerCase()}"]`
  )
  audio.currentTime = 0
  audio.play()
  div.classList.add("playing")
  setTimeout(() => {
    div.classList.remove("playing")
    audio.paused()
  }, 500)
})
