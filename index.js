/*----VARIABLES----*/
const displayInput = document.querySelector(".display-input");
const displayHistory = document.querySelector(".display-history");
const numberAndExecutionButtons = document.querySelectorAll(".operation-button, .number-button");
const equalButton = document.querySelector(".equal");
const undoButton = document.querySelector(".undo")
const clearButton = document.querySelector(".clear")
let dotAvibletoUse = true;

/*----FUNCTIONS----*/
//trailing zeros fix and long numbers
const trailingZeros = (num) => {
    let newStr = num.toString();
    //trailing zeros
    if (newStr[newStr.length - 1] === "1") {
        return parseFloat(newStr.slice(0, -1).replace(/0*$/, ""), 10);
    } else if (newStr.length > 10) {
        return num.toFixed(2)
    } else {
        return num;
    }
}
//clear function
const clear = () => {
    displayHistory.textContent = "";
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
const execute = () => {
    const p = document.createElement("p");
    let output = (Function('"use strict"; return (' + displayInput.textContent + ')'))();
    //preventing displaying infinity
    if (output == Infinity) {
        displayInput.textContent = "";
        output = "ERROR"
        p.textContent = displayInput.textContent + "=" + output;
    } else {
        p.textContent = displayInput.textContent + "=" + trailingZeros(output);
        displayInput.textContent = trailingZeros(output);
    }
    displayHistory.appendChild(p);
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