let N = 3;

let pattern = "";
let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let externalVarible = 0;

for (let i = 1; i <= N; i++) {
  if (i == 1) {
    for (let j = 0; j < N + N + 1; j++) {
      pattern += alphabets[j];
    }
    pattern += "\n";
  }
  for (let k = 1; k <= N + 1 - i; k++) {
    pattern += alphabets[externalVarible];
    externalVarible+=1
  }
  for (let l = 1; l <= i + i - 1; l++) {
    pattern += "#";
    externalVarible+=1
  }
  for (let m = 1; m <= N + 1 - i; m++) {
    pattern += alphabets[externalVarible];
    externalVarible+=1
  }

  pattern += "\n";
  externalVarible=0
}

console.log(pattern);

document.body.innerText = pattern;
