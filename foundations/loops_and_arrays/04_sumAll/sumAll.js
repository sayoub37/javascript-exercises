/*
If the function receives invalid arguments (such as negative numbers, non-integers, strings etc. - anything other than positive integers), it should return the string `'ERROR'`.
*/
const sumAll = function(a, b) {
	if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0)
		return ("ERROR");
	if (a > b)
	{
		let temp = a;
		a = b;
		b = temp;
	}
	let sum = 0;
	for (let i = a; i <= b; ++i)
	{
		sum += i;
	}
	return (sum);
};

// Do not edit below this line
module.exports = sumAll;
