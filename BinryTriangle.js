let N = prompt("Enter N");

let pattern = "";

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    if (i % 2 !== 0 && j % 2 !== 0) {
        pattern += "1";
      } else if (i % 2 === 0 && j % 2 === 0) {
        pattern += "1";
      } else if (i % 2 === 0 && j % 2 !== 0) {
        pattern += "0";
      } else if (i % 2 !== 0 && j % 2 === 0) {
        pattern += "0";
      }else{
        pattern += "Boom";
      }
      
  }

  pattern += "\n";
}

console.log(pattern);

document.body.innerText = pattern;
