const zero = document.getElementById("zero")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("sevev")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const addition = document.getElementById("plus")
const subtraction = document.getElementById("mins")
const division = document.getElementById("divide")
const remainder = document.getElementById("remainder")
const AC = document.getElementById("refresh")
const times = document.getElementById("times")
const equal = document.getElementById("equal")
const decimal = document.getElementById("decimal")
const backspace = document.getElementById("delete")
let result = document.getElementById("result");
let userScore = 0; 


equal.addEventListener("click", ()=>{
  result.innerHTML = userScore++;
})

one.addEventListener("click", ()=>{
    result.innerHTML = userScore--;
  })

  one.addEventListener("touchstart", ()=>{
    result.innerHTML = userScore--;
  })

  equal.addEventListener("touch", ()=>{
    result.innerHTML = userScore++;
  })

