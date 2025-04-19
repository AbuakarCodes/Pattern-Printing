let n = prompt("enter");

let pattern = "";

let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    if (i % 2 !== 0) pattern += j;
    if (i % 2 == 0) pattern += alphabets[j-1];
  }
  pattern += "\n";
}

document.body.innerText = pattern;
