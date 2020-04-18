let displayInput = document.querySelector(".display-input");
let numberAndExecutionButtons = document.querySelectorAll(".operation-button, .number-button");
let equalButton = document.querySelector(".equal");
let undoButton = document.querySelector(".undo")
let clearButton = document.querySelector(".clear")

//clear function
const clear = () => {
    displayInput.textContent = "";
}
//clear function
const undo = () => {
    displayInput.textContent = displayInput.textContent.split("").slice(0, -1).join("")
}

//key handling
window.addEventListener("keydown", (e) => {
    if (/[0-9]/gi.test(e.key)) {
        displayInput.textContent += e.key;
    } else if (e.key == "Backspace") {
        undo();
    }
});

// click hanling 
[...numberAndExecutionButtons].map(item => {
    item.addEventListener("click", (e) => {
        displayInput.textContent += e.target.textContent;
    });
});
undoButton.addEventListener("click", undo)
clearButton.addEventListener("click", clear)

//evaluating input
//eval sub console.log((Function('"use strict"; return (' + displayInput.textContent + ')'))())
equalButton.addEventListener("click", (() => {
    console.log('xd')
}));