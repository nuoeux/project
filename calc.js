const firstValue = document.getElementById('firstValue');
const secondValue = document.getElementById('secondValue');
const result = document.getElementById('result');

let operator = '+';

window.onload = function() {
    document.querySelector("button[onclick=\"setOperator('+')\"]").classList.add('selected');
}

function setOperator(op) {
    document.querySelectorAll('.operator button').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    document.querySelector(`button[onclick="setOperator('${op}')"]`).classList.add('selected');
    
    operator = op;
}

function calculate() {
    const num1 = parseFloat(firstValue.value);
    const num2 = parseFloat(secondValue.value);
    
    let calculatedResult;
    
    switch(operator) {
        case '+':
            calculatedResult = num1 + num2;
            break;
        case '-':
            calculatedResult = num1 - num2;
            break;
        case '*':
            calculatedResult = num1 * num2;
            break;
        case '/':
            calculatedResult = num2 !== 0 ? num1 / num2 : '나눗셈 불가';
            break;
    }
    
    result.value = calculatedResult;
}
