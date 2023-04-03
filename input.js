let num1 = "";
let num2 = '';
let operator = '';

const display = document.querySelector('#display');
const del = document.querySelector('.delete');
const reset = document.querySelector('.reset');

del.addEventListener('click', () => {
    if (!operator) {
        num1 = num1.slice(0, num1.length - 1);
        display.innerText = num1
    } else {
        num2 = num2.slice(0, num2.length - 1);
        display.innerText = num2;
    }
})
reset.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    display.innerText = ''
})


function addNumber(num) {
    if (!operator) {
        num1 += num;
        display.innerText = num1
    } else {
        num2 += num;
        display.innerText = num2
    }
}

function setOperator(newOperator) {
    if (operator) {
        cal();
    } else {
        operator = newOperator;
    }
};

function cal() {
    let result;

    if (operator === "plus") {
        result = parseFloat(num1) + parseFloat(num2);
    }
    if (operator === "minus") {
        result = parseFloat(num1) - parseFloat(num2);
    }
    if (operator === "div") {
        result = parseFloat(num1) / parseFloat(num2);
    }
    if (operator === "mul") {
        result = parseFloat(num1) * parseFloat(num2);
    }
    display.innerHTML = result;
    num1 = result;
    num2 = "";
    operator = '';
}
