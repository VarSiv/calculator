

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
    this.previousText.innerHTML = this.previousData
    this.currentText.innerHTML= this.currentData
  }
  deleteNumber(){
    this.currentData=this.currentText.innerText.slice(0, (this.currentText.innerText.length)-1)
  }
  appendOperation(operation){

    this.operation = operation
    if (this.currentData === ''){
      return
    }
    if (this.previousData === ''){
      this.previousData = this.currentData + this.operation
      this.currentData = ''
    }
    else {
      this.calculate()
      this.previousData = this.currentData + operation
      this.currentData = ''
    }

  }
  calculate(){
    if (this.currentData==='' || this.previousData==='') return 
    let computation
    const prev = parseFloat(this.previousData)
    const cur = parseFloat(this.currentData)
    const operand = this.previousData.slice(-1)
    switch (operand){
      case '+':
        computation = prev+cur
        break
      case '-':
        computation = prev-cur
        break
      case '×':
        computation = prev*cur
        break
      case '÷':
        computation = prev/cur
        break
    }
  
    this.currentData = computation
    this.previousData = ''
    this.operation = undefined
  }
  finalResult (){
    if (this.currentData==='' || this.previousData==='') return
    this.calculate()
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
allClearButton.addEventListener('click', () => {
  calculator.clear()
  calculator.updateDisplay()
})
operationButtons.forEach(button => {
  button.addEventListener('click', () =>{
    calculator.appendOperation(button.innerText)
    calculator.updateDisplay()
  })
})
equalsButton.addEventListener('click', () => {
  calculator.finalResult()
  calculator.updateDisplay()  
})