/*----VARIABLES----*/
const displayInput = document.querySelector(".display-input");
const numberAndExecutionButtons = document.querySelectorAll(".operation-button, .number-button");
const equalButton = document.querySelector(".equal");
const undoButton = document.querySelector(".undo")
const clearButton = document.querySelector(".clear")
let dotAvibletoUse = true;

/*----FUNCTIONS----*/
//clear function
const clear = () => {
    displayInput.textContent = "";
    dotAvibletoUse = true;
};

//clear function
const undo = () => {
    //if deleted element is a dot allow another
    if (displayInput.textContent[displayInput.textContent.length - 1] === ".") {
        dotAvibletoUse = true;
    }
    displayInput.textContent = displayInput.textContent.split("").slice(0, -1).join("")
};

//eval func
//eval sub console.log((Function('"use strict"; return (' + displayInput.textContent + ')'))())
const execute = () => {
    console.log('xd')
};
const validation = (context) => {
    if (/[0-9]/gi.test(context)) {
        //preventing multiple 0 at start
        if (displayInput.textContent.length === 1 && context === "0") { }
        else { displayInput.textContent += context; }

    } else if (/(\+|-|\*|\/)/i.test(context)) {
        //preventing multiple special characters
        if (/[0-9]/gi.test(displayInput.textContent[displayInput.textContent.length - 1])) {
            displayInput.textContent += context;
            dotAvibletoUse = true;
        }

    } else if (/(\.)/i.test(context)) {
        //preventing dot after special character
        if (/(\+|-|\*|\/)/i.test(displayInput.textContent[displayInput.textContent.length - 1])) { } else if (dotAvibletoUse) {
            displayInput.textContent += context;
            dotAvibletoUse = false;
        }
    }
    else if (/(=)/gi.test(context)) {
        execute();

    }
    else if (context == "Backspace") {
        undo();

    }
}

/*----EVENT HANDLING----*/
//key handling
window.addEventListener("keydown", (e) => {
    validation(e.key)
});

// click hanling 
[...numberAndExecutionButtons].map(item => {
    item.addEventListener("click", (e) => {
        validation(e.target.textContent)
    });
});
undoButton.addEventListener("click", undo)
clearButton.addEventListener("click", clear)
equalButton.addEventListener("click", execute);