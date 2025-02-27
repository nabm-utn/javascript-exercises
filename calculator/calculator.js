const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sumAll, item) => sumAll + item, 0);
};

const multiply = function(array) {
  return array.reduce((multAll, item) => multAll * item, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a === 0) return 1;
  if (a === 1) return 1;
  return a * factorial(a-1);
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
