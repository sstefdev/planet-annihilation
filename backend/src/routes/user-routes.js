const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticateToken = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token == null) return res.status(401);

	jwt.verify(token, 'some secret', (err, user) => {
		if (err) return res.status(403);
		req.user = user;
		next();
	});
};

const userExists = async (key, value) => {
	try {
		const user = await User.findAll({
			where: {
				[key]: value,
			},
		});
		return user;
	} catch (err) {
		throw new Error(err);
	}
};

router.get('/', async (req, res) => {
	try {
		const { id } = req.query;
		const user = await userExists('id', id);
		res.status(200).json(user[0]);
	} catch (err) {
		res.status(404).send('No user found.');
	}
});

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { dataValues } = req.user;
	const { password, ...rest } = dataValues;
	res.json(rest);
});

router.get('/token', authenticateToken, (req, res) => {
	res.status(200).json(req.user);
});

router.put('/', (req, res) => {
	res.send('delete');
});

router.delete('/', (req, res) => {
	res.send('delete');
});

module.exports = { userRoutes: router, userExists };
