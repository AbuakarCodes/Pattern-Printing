let N = 3;

let pattern = "";

let externalVarible = 1;

for (let i = 1; i <= N; i++) {
  if (i == 1) {
    for (let j = 1; j <= N + N + 1; j++) {
      pattern += j;
    }
    pattern += "\n";
  }
  for (let k = 1; k <= N + 1 - i; k++) {
    pattern += externalVarible;
    externalVarible+=1
  }
  for (let l = 1; l <= i + i - 1; l++) {
    pattern += "#";
    externalVarible+=1
  }
  for (let m = 1; m <= N + 1 - i; m++) {
    pattern += externalVarible;
    externalVarible+=1
  }

  pattern += "\n";
  externalVarible=1
}

console.log(pattern);

document.body.innerText = pattern;
