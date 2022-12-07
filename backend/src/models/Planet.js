const { sequelize, DataTypes } = require('../config/db');

const Planet = sequelize.define('Planet', {
	name: {
		type: DataTypes.STRING(100),
	},
	health: {
		type: DataTypes.INTEGER(10000),
	},
	description: {
		type: DataTypes.STRING(1000),
	},
	image: {
		type: DataTypes.STRING(500),
	},
});

module.exports = Planet;
