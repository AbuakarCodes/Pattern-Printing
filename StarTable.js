// let N = prompt("Enter N");
let N = 4;

let pattern = "";

for (let i = 1; i <= N; i++) {
  if (i == 1) {
    for (let j = 1; j <= N + N +1; j++) {
      pattern += j;
    }
    pattern+="\n"
  }
  for (let k = 1; k <= N+1-i; k++) {
    pattern += k;
  }
  for (let l = 1; l <= i + i - 1; l++) {
    pattern += "#";
  }
  for (let m = 1; m <= N+1-i; m++) {
    pattern += m  ;
  }

  pattern += "\n";
}

console.log(pattern);

document.body.innerText = pattern;
