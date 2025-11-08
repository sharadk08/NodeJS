let compare = (operand1, operand2) => {
    if (operand1 > operand2) {
        console.log(`${operand1} is greater than ${operand2}`);
    } else if (operand1 < operand2) {
        console.log(`${operand1} is less than ${operand2}`);
    } else {
        console.log(`${operand1} is equal to ${operand2}`);
    }
};

module.exports = {
    compare
};