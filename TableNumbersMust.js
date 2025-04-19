let N = 3;

let pattern = "";
let externalVarible = 1;

for (let i = 1; i <= N; i++) {
  if (i == 1) {
    for (let j = 1; j <= N + 1; j++) {
      pattern += j;
    }
    for (let a = N ; a >= 1; a--) {
        pattern += a;
      }
    pattern += "\n";

    
  }
  for (let k = 1; k <= N + 1 - i; k++) {
    pattern += k;
  }
  for (let l = 1; l <= i + i - 1; l++) {
    pattern += "#";
  }
  for (let m = N + 1 - i; m >= 1; m--) {
    pattern += m;
  }

  pattern += "\n";
  externalVarible = 1;
}

console.log(pattern);

document.body.innerText = pattern;
