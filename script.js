// Handle Input Variables
const inputName = document.getElementById('input-name')
const inputNumber = document.getElementById('input-number')
const inputMonth = document.getElementById('input-month')
const inputYear = document.getElementById('input-year')
const inputCVC = document.getElementById('input-cvc')

// Handle Output Variables
const outputName = document.getElementById('output-name')
const outputNumber = document.getElementById('output-number')
const outputMonth = document.getElementById('output-month')
const outputYear = document.getElementById('output-year')
const outputCVC = document.getElementById('output-cvc')
function handleCardNameChange(event) {
  
    const value = event.target.value;
    outputName.innerText = value
    
}

function handleCardNoChange(event) {
  let value = inputNumber.value.replace(/\s+/g, ''); // Remove all spaces
  if (value > 16){
   value = value.slice(0, 16)
  }
  inputNumber.value = value.replace(/(.{4})(?=.)/g, '$1 ');

  const hasLetters = /[a-zA-Z]/.test(value)
  if (hasLetters){
    inputNumber.style.border = '1px solid red'
    inputNumber.nextElementSibling.style.display = 'block'
  }
   
    const outputValue = event.target.value;
    outputNumber.innerText = outputValue
    
  
    

}

function handleExpMonth(event) {
  const maxLength = 2;

  if (inputMonth.value > maxLength){
    inputMonth.value = inputMonth.value.slice(0, maxLength)
  }
  const value = event.target.value;
  outputMonth.innerText = value

  if (inputMonth.value < 1 || inputMonth.value > 12) {
    inputMonth.style.border = '1px solid red'
  } else {
    inputMonth.style.border = '1px solid green'

  }
}

function handleExpYear(event) {
  const maxLength = 2;

  if (inputYear.value > maxLength){
    inputYear.value = inputYear.value.slice(0, maxLength)
  }
  const value = event.target.value;
  outputYear.innerText = value


}

function handleCVC(event) {
  const maxLength = 3;

  if (inputCVC.value > maxLength){
    inputCVC.value = inputCVC.value.slice(0, maxLength)
  }
  const value = event.target.value;
  outputCVC.innerText = value

}
inputName.addEventListener('input', handleCardNameChange)
inputNumber.addEventListener('input', handleCardNoChange)
inputMonth.addEventListener('input', handleExpMonth)
inputYear.addEventListener('input', handleExpYear)
inputCVC.addEventListener('input', handleCVC)