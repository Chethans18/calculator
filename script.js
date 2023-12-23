let firstNumber = 0, secondNumber = 0, operator;


//this display value of button pressed into the input 

function display(value) {
    let display = document.querySelector('#display')
    display.value += value;
}

//function to clear the values in the display
const clear = document.querySelector('#clear')
clear.addEventListener('click', () => {
    const display = document.querySelector('#display');
    display.value = "";
});


//function to delet single element
const delet = document.querySelector('#delet')
delet.addEventListener('click', () => {
    const display = document.querySelector('#display');
    display.value = display.value.slice(0, -1);
});


//function to calculate
const equals = document.querySelector('#equals')
equals.addEventListener('click', () => {
    const display = document.querySelector('#display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
});


const one = document.querySelector('#one');
one.addEventListener('click', () => {
    display('1');
});
const two = document.querySelector('#two');
two.addEventListener('click', () => {
    display('2');

});
const three = document.querySelector('#three');
three.addEventListener('click', () => {
    display('3');

});
const four = document.querySelector('#four');
four.addEventListener('click', () => {
    display('4');

});
const five = document.querySelector('#five');
five.addEventListener('click', () => {
    display('5');
});
const six = document.querySelector('#six');
six.addEventListener('click', () => {
    display('6');

});
const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    display('7');

});
const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    display('8');

});
const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    display('9');

});
const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    display('0');

});
const dot = document.querySelector('#dot');
dot.addEventListener('click', () => {
    display('.');

});
const add = document.querySelector('#add');
add.addEventListener('click', () => {
    display('+');

});
const sub = document.querySelector('#sub');
sub.addEventListener('click', () => {
    display('-');

});
const multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => {
    display('*');

});
const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    display('/');

});

