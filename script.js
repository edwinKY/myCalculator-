const display = document.getElementById("display");

function appendToDisplay(input) {
display.value += input;
}

function clearDisplay() {
display.value = "";
}

function calculate() {
try {
    // Check if there is division by zero
    if (display.value.includes('/0')) {
    throw new Error('Division by zero');
    }
    display.value = eval(display.value);
} catch (error) {
    display.value = "Error";
}
}