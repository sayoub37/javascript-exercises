const removeFromArray = function() {

	let arr = [];
	let currentElm;
	for (let i = 0; i < arguments[0].length; ++i)
	{
		currentElm = arguments[0][i];
		let found = 0;
		for (let j = 1; j < arguments.length; ++j)
		{
			if (arguments[j] === currentElm)
			{
				found = 1;
				break;
			}
		}
		if (!found)
			arr.push(currentElm);
	}
	return (arr);
};

// Do not edit below this line
module.exports = removeFromArray;
