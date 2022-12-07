require('@models/Starship');
require('@models/Planet');
require('@models/Enemy');
const { sequelize, DataTypes } = require('../config/db');
const Highscore = require('./Highscore');

const User = sequelize.define('User', {
	username: {
		type: DataTypes.STRING(100),
	},
	email: {
		type: DataTypes.STRING(100),
	},
	password: {
		type: DataTypes.STRING(100),
	},
	image: {
		type: DataTypes.STRING(500),
	},
	google_id: {
		type: DataTypes.STRING,
	},
});

User.hasMany(Highscore, {
	foreignKey: 'user_id',
});

module.exports = User;
