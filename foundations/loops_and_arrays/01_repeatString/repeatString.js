const repeatString = function(str, n) {
	let newStr = "";
	if (n < 0)
	{
		return ("ERROR");
	}
	for (let i = 0; i < n; ++i)
	{
		newStr += str;
	}
	return (newStr);
};

// Do not edit below this line
module.exports = repeatString;
