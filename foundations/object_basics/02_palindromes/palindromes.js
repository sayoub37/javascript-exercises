const palindromes = function (string) {
	let index = 0 ;
    	//removes spaces and punctionations
    	const regex = /,|\.|!|\?| /g;
	while ((index = string.search(regex)) != -1)
	{
		string = string.slice(0, index) + string.slice(index + 1);
	}
	// convert all chars into lowercase
	string = string.toLowerCase();
	// make a reversed copy of string
	let reverseString = "";
	for (let i = string.length - 1; i > -1; --i)
	{
		reverseString += string[i];
	}
	// compare the stirng and return the result
//	console.log(`string: ${string}`);
//	console.log(`reverseString: ${reverseString}`);
	return (string == reverseString);

}
// Do not edit below this line
module.exports = palindromes;
