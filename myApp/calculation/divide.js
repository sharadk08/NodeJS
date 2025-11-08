let division = {};

division.divide = (operand1, operand2) => {
    if (operand2 === 0) {
        console.log("Error: Division by zero");
    } else {
        console.log("Result: ", operand1 / operand2);
  }
};

module.exports = division;