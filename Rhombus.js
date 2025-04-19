let N = prompt("Enter N");

let pattern = "";

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N - i; j++) {
    pattern += "O";
  }
  for (let j = 1; j <= N; j++) {
    pattern += "*";
  }

  for (let k = N; k <= 1; k--) {
    pattern += "O";
  }

  pattern += "\n";
}

console.log(pattern);

document.body.innerText = pattern;
