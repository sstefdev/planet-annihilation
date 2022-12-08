const router = require('express').Router();
const Planet = require('@models/Planet');

router.get('/', async (_req, res) => {
	try {
		const planet = await Planet.findAll();
		res.status(200).json(planet);
	} catch (err) {
		res.status(404).send('No planet found.');
	}
});

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const planet = await Planet.findAll({
			where: {
				id,
			},
		});
		res.status(200).json(planet);
	} catch (err) {
		res.status(404).send('No planet found.');
	}
});

router.post('/', async (req, res) => {
	try {
		const planet = req.body;
		const newPlanet = await Planet.create({ ...planet });
		res.status(200).json(newPlanet);
	} catch (err) {
		res.status(404).send('Something went wrong.');
	}
});

router.put('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const planet = req.body;
		const updatedPlanet = await Planet.update(
			{ ...planet },
			{
				where: {
					id,
				},
			}
		);
		res.status(200).json({ message: 'Planet updated' });
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: 'Something went wrong.' });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const planet = await Planet.destroy({
			where: {
				id,
			},
		});
		res.status(200).json(planet);
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: 'No planet found.' });
	}
});

module.exports = router;
