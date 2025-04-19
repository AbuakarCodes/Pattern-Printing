let n = prompt("enter");

let pattern = ""

let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      pattern += alphabets[j]
    }
    pattern += "\n"
}


// Inverted Tringle 

// for (let i = 1; i <= n; i++) {
//     for (let j = n; j >= i; j--) {
//       pattern += alphabets[j]
//     }
//     pattern += "\n"
// }



document.body.innerText = pattern