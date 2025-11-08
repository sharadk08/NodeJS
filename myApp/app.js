const addCalc = require('./calculation/add');
const subCalc = require('./calculation/sub');
const multiCalc = require('./calculation/multiply');
const divCalc = require('./calculation/divide');
const compare = require('./comparison/compare');

addCalc.add(10, 5);
subCalc.sub(10, 5);
multiCalc.multiply(10, 5);
divCalc.divide(10, 5);
compare.compare(10, 5);