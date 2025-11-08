let multiply = (operand1, operand2) => {
  console.log("Result: ", operand1 * operand2);
}

let divide = (operand1, operand2) => {
  if (operand2 === 0) {
    console.log("Error: Division by zero");
  } else {
    console.log("Result: ", operand1 / operand2);
  }
}

module.exports = {
  multiply,
  divide
};
