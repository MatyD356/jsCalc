/*----VARIABLES----*/
const displayInput = document.querySelector(".display-input");
const numberAndExecutionButtons = document.querySelectorAll(".operation-button, .number-button");
const equalButton = document.querySelector(".equal");
const undoButton = document.querySelector(".undo")
const clearButton = document.querySelector(".clear")

/*----FUNCTIONS----*/
//clear function
const clear = () => {
    displayInput.textContent = "";
};

//clear function
const undo = () => {
    displayInput.textContent = displayInput.textContent.split("").slice(0, -1).join("")
};

//eval func
//eval sub console.log((Function('"use strict"; return (' + displayInput.textContent + ')'))())
const execute = () => {
    console.log('xd')
};

/*----EVENT HANDLING----*/
//key handling
window.addEventListener("keydown", (e) => {
    if (/[0-9]/gi.test(e.key)) {
        displayInput.textContent += e.key;
    } else if (/^(\+|-|\*|\/|\||\^|\(|.|\))$/gi.test(e.key)) {
        displayInput.textContent += e.key;
    } else if (/(=)/gi.test(e.key)) {
        execute();
    }
    else if (e.key == "Backspace") {
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
equalButton.addEventListener("click", execute);