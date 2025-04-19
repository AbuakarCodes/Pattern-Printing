let N = prompt("Enter N");

let pattern = "";

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i == j || i + j == N - 1) {
      pattern += "X";
    } else {
      pattern += "a";
    }
}
pattern += "\n";
}

console.log(pattern);

document.body.innerText = pattern;
