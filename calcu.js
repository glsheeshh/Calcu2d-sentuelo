const display = document.getElementById("display")

function append(value){
    display.value += value
}

function compute(value){
    display.value = eval(display.value);
}

function clears(value){
    display.value = '';
}

function backS(value){
    display.value = display.value.slice(0, -1);
}
