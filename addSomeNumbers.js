var generateRandomNumber = require("./generateSomeNumbers.js");

var sum = function(){
  return generateRandomNumber(100,5) + generateRandomNumber(1,5);
};

module.exports = sum;
