let n = prompt("Enter");

let pattern = "";
for (let i = 1; i <= n; i++) {
  for (let j = n; j >= i ; j--) {
    pattern +=  "*"
  }
  pattern += "\n";
}

document.body.innerText = pattern