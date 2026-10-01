const getTheTitles = function(arrBooks) {
	let booksTitle = arrBooks.map((book) => {
					return (book.title);
	});
	return (booksTitle);
};

// Do not edit below this line
module.exports = getTheTitles;
