const display = document.getElementById('display');

function appendToDisplay(value) {
    if (
        display.value === 'Error' ||
        (display.value === '0' && value !== '.' && !isOperator(value))
    ) {
        display.value = value;
    } else {
        display.value += value;
    }
}

function isOperator(value) {
    return ['/', '*', '-', '+'].includes(value);
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function performCalculation(expression) {
    try {
        // WARNING: Using 'new Function' can be risky if input is not sanitized.
        // For a simple calculator, this is a common approach.
        // A safer solution would involve a math expression parser.
        const result = new Function('return ' + expression)();
        if (isNaN(result) || !isFinite(result)) {
            return 'Error';
        }
        return result;
    } catch {
        return 'Error';
    }
}

function calculateResult() {
    if (!display.value || display.value === 'Error') return;
    display.value = performCalculation(display.value);
}

// Export for Node.js testing (optional for simple setup)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { performCalculation };
}
