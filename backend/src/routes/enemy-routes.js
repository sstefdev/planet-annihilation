const router = require('express').Router();
const Enemy = require('@models/Enemy');

router.get('/', async (_req, res) => {
	try {
		const enemy = await Enemy.findAll();
		res.status(200).json(enemy);
	} catch (err) {
		res.status(404).send('No enemy found.');
	}
});

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const enemy = await Enemy.findAll({
			where: {
				id,
			},
		});
		res.status(200).json(enemy);
	} catch (err) {
		res.status(404).send('No enemy found.');
	}
});

router.post('/', async (req, res) => {
	try {
		const enemy = req.body;
		const newEnemy = await Enemy.create({ ...enemy });
		res.status(200).json(newEnemy);
	} catch (err) {
		res.status(404).send('No enemy found.');
	}
});

router.put('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const enemy = req.body;
		const updatedEnemy = await Enemy.update(
			{ ...enemy },
			{
				where: {
					id,
				},
			}
		);
		res.status(200).json(updatedEnemy);
	} catch (err) {
		console.log(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const enemy = await Enemy.destroy({
			where: {
				id,
			},
		});
		res.status(200).json(enemy);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
