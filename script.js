const history = [];

function calculate(){
  const num1 = +document.getElementById("num1").value;
  const num2 = +document.getElementById("num2").value;
  const operator = document.getElementById("operator").value.trim();

let result;

if (operator === "+"){
  result = num1 + num2
} else if (operator === "-"){
  result = num1 - num2
} else if (operator === "*"){
  result = num1 * num2
} else if (operator === "/"){
   if (num2 === 0) {
   alert("❌ Cannot divide by zero!");
   return;
}
   result = num1 / num2
} else {
   alert("❌ Invalid operator");
   return;
}


const resultText = `${num1} ${operator} ${num2} = ${result}`
document.getElementById("result").innerText = "Result: " + result;

history.push(resultText);
updateHistory();

}


function updateHistory() {
const historyList = document.getElementById("historyList");
historyList.innerHTML = ""; // clear old
history.forEach(item => {
  const div = document.createElement("div");
  div.innerText = item;
  historyList.appendChild(div);
});
}function updateHistory() {
const historyList = document.getElementById("historyList");
historyList.innerHTML = ""; // clear old
history.forEach(item => {
  const div = document.createElement("div");
  div.innerText = item;
  historyList.appendChild(div);
});
}






























































































// const history = [];

//   function calculate() {
//     const num1 = +document.getElementById("num1").value;
//     const num2 = +document.getElementById("num2").value;
//     const operator = document.getElementById("operator").value.trim();

//     let result;
//     if (operator === "+") {
//       result = num1 + num2;
//     } else if (operator === "-") {
//       result = num1 - num2;
//     } else if (operator === "*") {
//       result = num1 * num2;
//     } else if (operator === "/") {
//       if (num2 === 0) {
//         alert("❌ Cannot divide by zero!");
//         return;
//       }
//       result = num1 / num2;
//     } else {
//       alert("❌ Invalid operator");
//       return;
//     }

//     const resultText = `${num1} ${operator} ${num2} = ${result}`;
//     document.getElementById("result").innerText = "Result: " + result;

//     history.push(resultText);
//     updateHistory();
//   }

//   function updateHistory() {
//     const historyList = document.getElementById("historyList");
//     historyList.innerHTML = ""; // clear old
//     history.forEach(item => {
//       const div = document.createElement("div");
//       div.innerText = item;
//       historyList.appendChild(div);
//     });
//   }































































































// // Array to store calculation history
// let history = [];

// let again = "yes"; // loop condition to keep asking user

// while (again.toLowerCase().trim() === "yes") {
//   // Get first number
//   let num1 = +prompt("Enter first number:");
  
//   // Get second number
//   let num2 = +prompt("Enter second number:");
  
//   // Get operator
//   let operator = prompt("Choose operation (+, -, *, /):");
//   operator = operator.trim(); // string method

//   let result;

//   // Perform operation using if-else
//   if (operator === "+") {
//     result = num1 + num2;
//   } else if (operator === "-") {
//     result = num1 - num2;
//   } else if (operator === "*") {
//     result = num1 * num2;
//   } else if (operator === "/") {
//     if (num2 === 0) {
//       alert("Error: Cannot divide by zero!");
//       continue; // skip this round
//     }
//     result = num1 / num2;
//   } else {
//     alert("Invalid operator! Please use +, -, *, or /");
//     continue; // skip this round
//   }

//   // Prepare calculation string and push to history array
//   let calcString = `${num1} ${operator} ${num2} = ${result}`;
//   history.push(calcString); // array method

//   // Show result
//   alert("Result: " + result);

//   // Ask to continue
//   again = prompt("Do you want to do another calculation? (yes/no)");
// }

// // Final History Output
// if (history.length > 0) {
//   alert("Calculation History:\n" + history.join("\n")); // array method
// } else {
//   alert("No calculations performed.");
// }
