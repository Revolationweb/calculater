let currentInput = '';
let operator = null;
let previousInput = '';

function appendValue(value) {
    currentInput += value;
    updateResult(currentInput);
}

function operation(op) {
    if (currentInput === '') return; // Prevent operation without input
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (previousInput === '' || currentInput === '' || operator === null) return;

    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error'; // Prevent division by zero
            break;
        default:
            return;
    }

    updateResult(result);
    previousInput = result.toString();
    currentInput = '';
    operator = null;
}

function clearResult() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateResult('');
}

function updateResult(value) {
    document.getElementById('result').value = value;
}
