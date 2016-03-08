var value = require('./generateSomeNumbers.js');
var dollars = require('./currencyConvert.js');
var myBalance = function(){
  var number=value(100, 1000000);
  var myMoney=dollars(number, "$");

  return myMoney;

};

var message = function(){
  return "Account balance: \n";
};


module.exports = {
  message: message,
  balance: myBalance

};
