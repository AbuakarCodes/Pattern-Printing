// let rows = prompt("Enter Rows");
// let Cols = prompt("Enter Col")

let pattern = "";

for (let i = 1; i <= 5; i++) {

 for(let j = 5; j>=i; j--){
  pattern += "*"
 }

  pattern = pattern + "\n";
}

document.body.innerText = pattern;

// *
// **
// ***
// ****
