let displayInput = document.querySelector(".display-input")
let numberAndExecutionButtons = document.querySelectorAll(".operation-button, .number-button")

//key handling
window.addEventListener("keydown", (e) => {
    if (/[0-9]/gi.test(e.key)) {
        displayInput.textContent += e.key;
    }
});

// click hanling 
[...numberAndExecutionButtons].map(item => {
    item.addEventListener("click", (e) => {
        displayInput.textContent += e.target.textContent;
    });
});

//evaluating input