let rows = prompt("Enter Rows")
let Cols = prompt("Enter Col")

let pattern = ""

for( let i=1; i<=rows; i++ ){
    for(let j=1; j<=Cols; j++){
        pattern += "*"
    }
    pattern += "\n"
}

document.body.innerText = pattern;
