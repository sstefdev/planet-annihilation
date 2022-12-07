const { sequelize, DataTypes } = require('../config/db');

const Starship = sequelize.define('Starship', {
	name: {
		type: DataTypes.STRING(100),
	},
	description: {
		type: DataTypes.STRING(500),
	},
	image: {
		type: DataTypes.STRING(500),
	},
});

module.exports = Starship;
