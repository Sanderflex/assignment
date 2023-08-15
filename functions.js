function showMessage() {
  alert( 'Good Evening MR Victor');
}
showMessage()
let numbersArray = [2, 4, 6, 8, 10];

let stringsArray = ["apple", "banana", "cherry", "date", "elderberry"];

let transformedNumbers = [];
numbersArray.forEach(num => {
  transformedNumbers.push(num * 2)
});

let transformedStrings = stringsArray.map(str => {
  return str.toUpperCase();
});

console.log("Transformed Numbers:", transformedNumbers);
console.log("Transformed Strings:", transformedStrings);

function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Cannot divide by zero";
    }
  }
  

  let num1 = 10;
  let num2 = 5;
  //let num2 = 0;
  console.log("Addition:", add(num1, num2));
  console.log("Subtraction:", subtract(num1, num2));
  console.log("Multiplication:", multiply(num1, num2));
  console.log("Division:", divide(num1, num2));
  