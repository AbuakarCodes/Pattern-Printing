let n = prompt("enter");

let pattern = ""

let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n-i+1; j++) {
      pattern += "*" 
    }
    for (let k = 0; k < i+i-1; k++) {
      pattern += alphabets[k]
    }
    for (let l = 0; l < n-i+1; l++) {
      pattern += "*" 
    }
    pattern += "\n"
}

console.log(pattern)

document.body.innerText = pattern