const palindromes = function (string) {

	const PUNCTIONATIONS = ".,!?";
	// remove all word break; '.,!?'

	let index = 0 ;
	while ((index = string.indexOf(PUNCTIONATIONS)) != -1)
	{
		string = string.slice(0, index) + string.slice(index + 1);
	//	string.splice(index, 1);
	}
	// remove all spaces;	
	while ((index = string.indexOf(" ")) != -1)
	{
		//string.splice(index, 1);
		string = string.slice(0, index) + string.slice(index + 1);
	}
	// convert all chars into lowercase
	string.toLowerCase();
	// make a reversed copy of string
	let reverseString = "";
	for (let i = string.length - 1; i > -1; --i)
	{
		reverseString += string[i];
	}
	// compare the stirng and return the result
	console.log(`string: ${string}`);
	console.log(`reverseString: ${reverseString}`);
	return (string == reverseString);

};

// Do not edit below this line
module.exports = palindromes;
