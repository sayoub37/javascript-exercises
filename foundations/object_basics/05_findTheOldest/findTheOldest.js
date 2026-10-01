const findTheOldest = function(people) {
	people.sort((person1, person2) => 
		{
			if(!("yearOfDeath" in person1))
			{
				let currentTime = new Date();
				person1["yearOfDeath"] = +(currentTime.getFullYear());
			}
			if (!("yearOfDeath" in person2))
			{
				let currentTime = new Date();
				person2["yearOfDeath"] = +(currentTime.getFullYear());
			}
			return ((person1.yearOfDeath - person1.yearOfBirth) - (person2.yearOfDeath - 
				person2.yearOfBirth));

	});
	return (people[people.length - 1]);
};

// Do not edit below this line
module.exports = findTheOldest;
