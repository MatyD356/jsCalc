let displayInput = document.querySelector(".display-input")
let allButtons = document.querySelectorAll(".btn")

//key handling
window.addEventListener("keydown", (e) => {
    if (/[0-9]/gi.test(e.key)) {
        displayInput.textContent += e.key;
    }
});

// click hanling 
[...allButtons].map(item => {
    item.addEventListener("click", (e) => {
        if (e.target.textContent === "AC" || e.target.textContent === "undo") { }
        else {
            displayInput.textContent += e.target.textContent;
        }
    });
});