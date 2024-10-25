/*Part 1: Fizz Buzz*/
console.log("******************")
console.log("Part 1: Fizz Buzz")
console.log("******************")


for(let i=1;i<=100;i++)
{

if(i%3===0 && i%5===0)
    {
        console.log("Fizz Buzz")
    }
if(i%3===0)
{
    console.log("Fizz")
}
else if(i%5===0)
    {
        console.log("Buzz")
    }
    else
    {
        console.log(i)
    }
}


// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
console.log("******************")
console.log("Part 2: Prime Time")
console.log("******************")
let n = 9;
let isPrime;
while (true) {
    isPrime = true;
    n++;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(n);
        break;
    }
}

console.log("******************")
console.log("Part 3: Feeling Loopy")
console.log("******************")

let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// Loop through characters in string
// Loop through characters in string
let cell = '';
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';
let cellNum = 1;
// For each character
for (let i = 0; i < data.length; i++) {
    let char = data[i];

    if (char == "," || char == "\n") {
      switch (cellNum) {
          case 1:
              cell1 = cell;
              break;
          case 2:
              cell2 = cell;
              break;
          case 3:
              cell3 = cell;
              break;
          case 4:
              cell4 = cell;
              break;
      }
      if (cellNum == 4){
          cellNum = 1;
      }
      else {
          cellNum += 1;
      }
      cell = "";
  } else {
      cell += char;
  }
    if (char == "\n"){
        console.log(cell1, cell2, cell3, cell4);
        cell = "";
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';
    }
}

