// javascript read from top to bottom so if a variable is printed before decleration it will give an error
let count = 0
function increment() {
    count++;
    document.getElementById("count-el").innerText = count
};
function save() {
    console.log(count)
}