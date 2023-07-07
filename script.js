

class Calculator{
  constructor (previousOperandTextElement, currentOperandTextElement){
    this.previousText = previousOperandTextElement
    this.currentText = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentData = ''
    this.previousData = ''
    this.operation = undefined
  }
  appendNumber(number) {
    if (number === '.' && this.currentData.includes('.')) return
    this.currentData = this.currentData.toString() + number.toString()

  }
  updateDisplay(){
    this.currentText.innerHTML= this.currentData
  }
  deleteNumber(){
    console.log(this.currentText.innerText.length)
    this.currentData=this.currentText.slice(this.currentText.innerText.length)
  }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
  
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
deleteButton.addEventListener('click', () => {
  calculator.deleteNumber()
  calculator.updateDisplay()
})
  