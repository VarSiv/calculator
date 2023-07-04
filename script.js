const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

class Calculator {
    constructor (previousOperandTextElement, currentOperandTextElement) {
        this.current = currentOperandTextElement
        this.previous = previousOperandTextElement
        this.clear()
    }
    clear(){
        this.current = ''
        this.previous = ''
        this.operation = undefined
    }
    delete(){

    }
    appendNumber(number){

    }
    chooseOperation(operation){

    }
    compute(){

    }
    updateDisplay(){

    }
}
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)