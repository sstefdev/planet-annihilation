const { sequelize, DataTypes } = require('../config/db');
const Highscore = require('./Highscore');
const Planet = require('./Planet');
const Starship = require('./Starship');
const Enemy = require('./Enemy');

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

User.hasOne(Planet, {
	foreignKey: 'user_id',
});

User.hasMany(Starship, {
	foreignKey: 'user_id',
});

User.hasMany(Highscore, {
	foreignKey: 'user_id',
});

module.exports = User;
