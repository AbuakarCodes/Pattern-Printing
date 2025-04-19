let N = prompt("enter");

let pattern = ""

let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N-i ; j++) {
        pattern += "*"
    }
    for (let k = 0; k < i ; k++) {
        pattern += alphabets[k]
    }
    pattern += "\n"
}

console.log(pattern)
document.body.innerText = pattern