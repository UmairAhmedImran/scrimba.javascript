// javascript read from top to bottom so if a variable is printed before decleration it will give an error
let count = 0
function increment() {
    count++;
    console.log(count)
    document.getElementById("count").innerText = count
};