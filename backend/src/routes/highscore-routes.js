const router = require('express').Router();
const Highscore = require('@models/Highscore');

router.get('/', async (_req, res) => {
	try {
		const highscore = await Highscore.findAll();
		res.status(200).json(highscore);
	} catch (err) {
		res.status(404).send('No highscore found.');
	}
});

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const highscore = await Highscore.findAll({
			where: {
				user_id: id,
			},
		});
		res.status(200).json(highscore);
	} catch (err) {
		res.status(404).send('No highscore found.');
	}
});

router.post('/', async (req, res) => {
	try {
		const { highscore, user_id } = req.body;
		const newJighscore = await Highscore.create({ user_id, highscore });
		res.status(200).json(newJighscore);
	} catch (err) {
		res.status(404).send('Something went wrong.');
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const highscore = await Highscore.destroy({
			where: {
				id,
			},
		});
		res.status(200).json({ message: 'Highscore deleted' });
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
