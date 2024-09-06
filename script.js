let display = document.getElementById('display');

// Append number to display
function appendNumber(number) {
    display.value += number;
}

// Append operator to display
function appendOperator(operator) {
    display.value += ` ${operator} `;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete last character
function deleteChar() {
    display.value = display.value.slice(0, -1);
}

// Calculate result (with exponentiation support)
function calculateResult() {
    try {
        const expression = display.value.replace(/\^/g, '**'); // Replace ^ with ** for exponentiation
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

// Calculate square root
function calculateSquareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

// Calculate square
function calculateSquare() {
    try {
        display.value = Math.pow(eval(display.value), 2);
    } catch (error) {
        display.value = 'Error';
    }
}

// Calculate percentage
function calculatePercentage() {
    try {
        display.value = eval(display.value) / 100;
    } catch (error) {
        display.value = 'Error';
    }
}

// Calculate factorial
function calculateFactorial() {
    const number = parseInt(display.value);
    if (number < 0) {
        display.value = 'Error';
    } else {
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        display.value = factorial;
    }
}

// Calculate logarithm (base 10)
function calculateLog() {
    display.value = Math.log10(parseFloat(display.value));
}

// Calculate natural logarithm (ln)
function calculateLn() {
    display.value = Math.log(parseFloat(display.value));
}

// Calculate sine
function calculateSin() {
    display.value = Math.sin(parseFloat(display.value));
}

// Calculate cosine
function calculateCos() {
    display.value = Math.cos(parseFloat(display.value));
}

// Calculate tangent
function calculateTan() {
    display.value = Math.tan(parseFloat(display.value));
}

// Calculate exponential (e^x)
function calculateExp() {
    display.value = Math.exp(parseFloat(display.value));
}

// Calculate inverse (1/x)
function calculateInverse() {
    display.value = 1 / parseFloat(display.value);
}
