const ftoc = function(farenheit) {
  let celsius = (5/9) * (farenheit - 32);
  return Math.round(celsius * 10) / 10;
};

const ctof = function(celsius) {
  let farenheit = (celsius * 9 / 5) + 32;
  return Math.round(farenheit * 10) / 10;
};

module.exports = {
  ftoc,
  ctof
};
