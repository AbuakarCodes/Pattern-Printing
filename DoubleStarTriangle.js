
// let N = prompt("Enter N");
let N = 4

let pattern = "";

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N - i; j++) {
    pattern += "O";
  }
  for (let j = 1; j <= N; j++) {
    pattern += "*";
  }

 

  pattern += "\n";
}

console.log(pattern);