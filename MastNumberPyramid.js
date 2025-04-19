let N = prompt("Enter N");

let pattern = "";

for (let i = 1; i <= N; i++) {

  for (let j = 1; j <= N - i; j++) {
    pattern += "\u00A0" 
  }

  for (let k = 1; k <= i ; k++) {
    pattern += k;
  }

  for (let l = i-1; l >= 1 ; l--) {
    pattern += l;
  }

  pattern += "\n";
}

console.log(pattern);

document.body.innerText = pattern;