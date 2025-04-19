let Y = prompt("Enter Y");
let X = prompt("Enter X");

let pattern = "";

for (let i = 1; i <= Y; i++) {
  for (let j = 1; j <= X; j++) {
    if (i == 1 || i == Y) {
      pattern += "O";
    } else if (i !== 1 && i !== Y && (j == 1 || j == X)) {
      pattern += "K";
    } else {
      pattern += " ";
    }
  }
  pattern += "\n";
}

console.log(pattern);

document.body.innerText = pattern;
