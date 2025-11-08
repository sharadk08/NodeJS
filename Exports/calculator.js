const myCalculator = require('./addSubtract');
const myNewCalculator = require('./multiDivide');

myCalculator.add(10, 5);          // 15
myCalculator.subtract(10, 5); // 5
myNewCalculator.multiply(10, 5);          // 50
myNewCalculator.divide(10, 0);          // Error: Division by zero
myNewCalculator.divide(10, 2);          // 5
