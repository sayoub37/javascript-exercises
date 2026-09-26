const convertToCelsius = function(fahrenheitDegree) {

	let celsiusDegree = (fahrenheitDegree - 32) * 5/9;
	return (+(celsiusDegree.toFixed(1)));
};

const convertToFahrenheit = function(celsiusDegree) {
	let fahrenheitDegree = celsiusDegree * 9 / 5 + 32;
	return (+(fahrenheitDegree.toFixed(1)));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
