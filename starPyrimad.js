let N = prompt("Enter N");

let pattern = "";

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N - i; j++) {
    pattern += "\u00A0" 
  }

  for (let k = 1; k <= i + i -1; k++) {
    pattern += "*";
  }

  pattern += "\n";
}

console.log(pattern);

document.body.innerText = pattern;
