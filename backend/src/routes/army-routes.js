const router = require('express').Router();
const Starships = require('@models/Starship');

const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomArmy = (strength, unitTypes) => {
	// Create an empty array to store the army
	const army = [];
	// Distribute the size randomly among the unit types
	let remainingSize = strength;
	for (const unitType of unitTypes) {
		// Generate a random number of units for this type
		let numUnits = getRandomInt(0, remainingSize);
		// Add the generated number of units of this type to the army
		army.push({ unitType, numUnits });
		remainingSize -= numUnits;
	}

	return army;
};

router.post('/', async (req, res) => {
	try {
		const availableStarships = await Starships.findAll();
		const { strength } = req.body;

		const army = generateRandomArmy(strength, availableStarships);

		res.status(200).json(army);
	} catch (err) {
		console.log(err);
		res.status(404).send('No army found.');
	}
});

module.exports = router;
