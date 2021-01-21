const input = document.querySelector("input");
const number = document.querySelectorAll("#jsNum");
const operate = document.querySelectorAll("#jsOperate");
const reset = document.querySelector(".reset");
const enter = document.querySelector(".enter");

let buffer = "";
let cacheBuffer = "";
let operateIndex = "";

const clickNumber = event => {
    console.log(event.target.innerText);
    const btnValue = event.target.innerText;
    buffer = buffer + btnValue;
    input.value = buffer;
}

const clickOperate = event => {
    const operateValue = event.target.innerText;
    switch(operateValue) {
        case "+" : operateIndex = 0;
        break;

        case "-" : operateIndex = 1;
        break;

        case "*" : operateIndex = 2;
        break;

        case "/" : operateIndex = 3;
        break;
    }

    cacheBuffer = buffer;
    input.value = "";
    buffer = "";
};

const clickReset = () => {
    buffer = "";
    cacheBuffer = "";
    operateIndex = "";
    input.value = "";
};

const clickEnter = () => {
    input.value = "";
    let calResult = 0;
    console.log(operateIndex);
    switch(operateIndex) {
        case 0 : calResult = Number(buffer) + Number(cacheBuffer);
        break;

        case 1 : calResult = Number(buffer) - Number(cacheBuffer);
        break;

        case 2 : calResult = Number(buffer) * Number(cacheBuffer);
        break;

        case 3 : calResult = Number(buffer) / Number(cacheBuffer);
        break;
    }
    console.log(calResult);
    input.value = calResult; 
}

function init() { 
    Array.from(number).forEach(numberArray => {
        numberArray.addEventListener("click", clickNumber);
    });

    Array.from(operate).forEach(operateArray => {
        operateArray.addEventListener("click", clickOperate);
    });

    reset.addEventListener("click", clickReset);
    enter.addEventListener("click", clickEnter);
}

init();