const inputElement = document.querySelector('.input');
const resultElement = document.querySelector('#result');
const errorElement = document.querySelector('#error');

let errorTime;
let resultTime;

// Function for update Result
function poundsToKg(event) {
    // Condition => error message with clear error message, input
    if (inputElement.value <= 0 || isNaN(inputElement.value)) {
        errorElement.innerText = 'Please enter a valid number!';

        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
            errorElement.innerText = '';
            inputElement.value = '';
        }, 2000);
    } else {
        resultElement.innerText = (+inputElement.value / 2.2).toFixed(2);
        clearTimeout(resultTime);
        resultTime = setInterval(() => {
            resultElement.innerText = '';
            inputElement.value = '';
        }, 5000);
    }
}

inputElement.addEventListener('input', poundsToKg);
