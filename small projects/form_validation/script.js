//username 5 charcter
//pasword least 10 charcter long
//paswword and curfurm password same
//agree condition check

const submitButton = document.querySelector("#submitButton")
const userName = document.querySelector("#txt-user")
const password = document.querySelector("#txt-pass")
const cunfirmPass = document.querySelector("#txt-confirm-pass")
const agreeCheckBox = document.querySelector("#checkbox-agree")
const listOfError = document.querySelector(".error-list")
const errorBox = document.querySelector(".errors")

submitButton.addEventListener("click", (e) => {
  const errors = []
  listOfError.innerHTML = ""

  if (userName.value.length <= 6) {
    errors.push("UserName must be in six charcter")
  }

  if (password.value.length < 10) {
    errors.push("Password must be in TEM charcter")
  }

  if (cunfirmPass.values !== password.values) {
    errors.push("Password does not match")
  }

  if (!agreeCheckBox.checked) {
    errors.push("check box is required")
  }
  console.log(errors)
  if (errors.length > 0) {
    e.preventDefault()
    e.stopPropagation()
    errorBox.classList.add("show")
    errors.forEach((error) => {
      listOfError.innerHTML += "<li>" + error + "</li>"
    })
  }
})
