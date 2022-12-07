const { sequelize, DataTypes } = require('../config/db');

const Planet = sequelize.define('Planet', {
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

module.exports = Planet;
