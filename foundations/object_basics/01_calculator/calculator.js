const add = function(a, b) {
		return (a + b);	
};

const subtract = function(a, b) {
			return (a - b);	
};

const sum = function(arrInt) {
		let sum = arrInt.reduce((accum, num) => {
				return (accum + num);
		}, 0);
		return (sum);
};

const multiply = function(arrInt) {
			let multi = arrInt.reduce((accum, num) => {
						return (accum * num);
			}, 1);
			return (multi);
};

const power = function(base, expo) {
	if (!expo)
		return (1);
	let result = base;
	for (let i = 1; i < expo; ++i)
	{
		result *= base;
	}
	return (result);
};

const factorial = function(base) {
	if (base == 0)
		return (1);
	return (base * factorial(base - 1));
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
