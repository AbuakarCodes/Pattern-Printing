let Y = prompt("Enter Y");
let X = prompt("Enter X");


let pattern = "";

for (let i = 1; i <= Y; i++) {
  for (let j = 1; j <= X; j++) {
    if (j == Math.floor(X / 2 + 1 ) || i == Math.floor(Y / 2 + 1) ) {
      pattern += "O";
      pattern += "\t";
    } else {
      pattern += "";
      pattern += "\t";
    }
  }
  pattern += "\n \n";
}
console.log(pattern);
// document.body.innerText = pattern;
