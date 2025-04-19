let N = prompt("Enter N");

let pattern = "";

let number = 1;

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += number;
    number += 1;
    // number += 2; //   For Odd
  }


  pattern += "\n";
}

console.log(pattern);

document.body.innerText = pattern;
