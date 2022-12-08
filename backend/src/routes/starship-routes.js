const router = require('express').Router();
const Starship = require('@models/Starship');

router.get('/', async (_req, res) => {
	try {
		const starship = await Starship.findAll();
		res.status(200).json(starship);
	} catch (err) {
		res.status(404).send('No starship found.');
	}
});

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const starship = await Starship.findAll({
			where: {
				id,
			},
		});
		res.status(200).json(starship);
	} catch (err) {
		res.status(404).send('No starship found.');
	}
});

router.post('/', async (req, res) => {
	try {
		const starship = req.body;
		const newStarship = await Starship.create({ ...starship });
		res.status(200).json(newStarship);
	} catch (err) {
		res.status(404).send('No starship found.');
	}
});

router.put('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const starship = req.body;
		const updatedStarship = await Starship.update(
			{ ...starship },
			{
				where: {
					id,
				},
			}
		);
		res.status(200).json(updatedStarship);
	} catch (err) {
		console.log(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const starship = await Starship.destroy({
			where: {
				id,
			},
		});
		res.status(200).json(starship);
	} catch (err) {
		res.status(404).send('No starship found.');
	}
});

module.exports = router;
