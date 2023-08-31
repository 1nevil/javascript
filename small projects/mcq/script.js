const exam = [
    {
        question: "What is used for style website ?",
        mcq: ["HTML", "CSS", "javascript", "php"],
        ans: "CSS"
    },
    {
        question: "Is javascript is serverside or clientside?",
        mcq: ["ClientSide", "Serverside", "None", "All of Above"],
        ans: "ClientSide"
    },
    {
        question: "What is used for make website dynamic ?",
        mcq: ["HTML", "CSS", "javascript", "php"],
        ans: "javascript"
    },{
        question: "Is servlet is serverside or clientside?",
        mcq: ["ClientSide", "Serverside", "None", "All of Above"],
        ans: "Serverside"
    }
]

let questionIndex = 0
const question = document.querySelector("#question")
const number = document.querySelector("#number")

const submitBtn = document.querySelector("#submit")
const container = document.querySelector("#container")
const radioButtons = document.getElementsByName('question1')
const scoreSpan = document.querySelector("#score")
const mcqDisplays = document.querySelectorAll('.mcq')
let rightAns = 0;
let listvalue 


questionDisplay()

function questionDisplay() {
    if (questionIndex < exam.length) {
        question.innerText = exam[questionIndex].question
        number.innerText = `${questionIndex + 1}.`
        radioButtons.forEach((radio, index) => {
            radio.value = exam[questionIndex].mcq[index]
            mcqDisplays[index].innerText = exam[questionIndex].mcq[index]
        })
    } else {
        alert("final score is " + rightAns)
    }   
}

submitBtn.addEventListener('click', () => {
    radioButtons.forEach((radioButton, key) => {
        if (radioButton.checked) {
            listvalue = radioButton.parentElement
            if (radioButton.value == exam[questionIndex].ans) {
                
                listvalue.style.backgroundColor='green'
                rightAns++
         
                scoreSpan.innerText = rightAns
            }else{
                listvalue.style.backgroundColor='red'
                
            }
        }
    });

    setTimeout(()=>{
        questionIndex++
        questionDisplay()
        listvalue.style.backgroundColor='white'

        radioButtons.forEach(btn => {
         btn.checked = false
        })
    },2000)

  
})
