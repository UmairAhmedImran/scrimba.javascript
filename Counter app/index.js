// javascript read from top to bottom so if a variable is printed before decleration it will give an error

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count++;
    countEl.textContent = count
};
function save() {
    saveText = count + " - "
    saveEl.textContent += saveText
    countEl.textContent = 0
    
}