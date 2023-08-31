// javascript read from top to bottom so if a variable is printed before decleration it will give an error
let count = 0
function increment() {
    count++;
    document.getElementById("count-el").textContent = count
};
function save() {
    saveText = count + " - "
    document.getElementById("save-el").textContent += saveText
    console.log(count)
}