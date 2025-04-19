// let n = prompt("Enter");

let pattern = "";




for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j=j+2) {
    pattern = pattern + j;
  }
  pattern = pattern + "\n"
}
document.body.innerText = pattern;