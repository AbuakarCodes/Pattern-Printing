let N = prompt("Enter N");

let pattern = "";

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N - i; j++) {
    pattern += "#";
  }

  for (let k = 1; k <= i; k++) {
    pattern += "O";
  }

  pattern += "\n";
}

console.log(pattern);

document.body.innerText = pattern;
