const router = require('express').Router();
const passport = require('passport');
const { userExists } = require('@utils');
const User = require('@models/User');

router.get('/google-id/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const user = await userExists('google_id', id);
		res.status(200).json(user[0]);
	} catch (err) {
		res.status(404).send('No user found.');
	}
});

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { password, ...rest } = req.user;
	res.status(200).json(rest);
});

router.put('/:id', async (req, res) => {
	try {
		const userData = req.body;
		const { id } = req.params;
		const user = await User.update(
			{ ...userData },
			{
				where: {
					id,
				},
			}
		);
		res.status(200).json({ message: 'User updated', user });
	} catch (err) {
		console.log(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.destroy({
			where: {
				id,
			},
		});
		res.status(200).json({ message: 'User deleted' });
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
