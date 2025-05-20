function calculator() {
  var valueOne = +prompt("Enter First Value ");
  var operator = prompt("Enter the operator (+, -, *, /)");
  var valueTwo = +prompt("Enter Second Value");

 
 
  if (operator == "+") {
    alert(valueOne + valueTwo);
  } 
  
  else if (operator == "-") {
    alert(valueOne - valueTwo);
  }
  
  else if (operator == "*") {
    alert(valueOne * valueTwo);
  }
  
  else if (operator == "/") {
    alert(valueOne / valueTwo);
  } 
  
  else {
    alert("Invalid Operator. Try Again!");
    calculator(); 
  }

  Again(); 
}

function Again() {
  var restart = prompt("Do you want to restart? (yes or no)").toLowerCase();
  if (restart === "yes") {
    calculator(); 
  } else {
    alert("Calculator stopped. Goodbye!");
  }
}

calculator(); 