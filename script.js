const operationButtons = document.querySelectorAll('.operation')
const numberButtons = document.querySelectorAll('.button')
const display = document.getElementById('display')
const equal = document.getElementById('equal')
const clearButton = document.getElementById('clear')
const pointButton = document.getElementById('point')
const removeButton = document.getElementById('remove')

class Calculator {
    constructor () {
        this.currentNumber = '';
        this.previousNumber = '';
    }

    addNumber(number) {
        if (this.currentNumber.includes('.') && number === '.') return 
        this.currentNumber = display.innerText += number;
    }

    clear () {
        display.innerText = '';
    }

    getOperation (operation) {
        this.operation = operation;
        this.previousNumber = this.currentNumber;
        this.currentNumber = '';
    }
    
    removeLast () {
       display.innerText = display.innerText.slice(0, -2);
    }

    result () {
        let computation;
        let prev = this.previousNumber.slice(0,-1)
        let slicing = prev.length;
        let current = this.currentNumber.slice(slicing + 1,-1)

        if (current === '') return

            switch (this.operation) {
                case '+':
                  computation = +prev + +current
                  break
                case '-':
                  computation = +prev - +current
                  break
                case '*':
                  computation = +prev * +current
                  break
                case '÷':
                  computation = +prev / +current
                  break
                default:
                  return
            }

        if (computation % 1 != 0) {
            this.computation = parseFloat(computation).toFixed(2);
        } else {
            this.computation = computation
        }
        
        display.innerText = this.computation

        this.previousNumber = '';
        this.currentNumber = '';  
    }

}




const calculator = new Calculator();

numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        calculator.addNumber(e.target.innerText)
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        calculator.getOperation(e.target.innerText)
    })
});

clearButton.addEventListener('click', () => {
    calculator.clear()
});

equal.addEventListener('click', () => {
    calculator.clear()
    calculator.result()
});

removeButton.addEventListener('click', () => {
    calculator.removeLast()
})