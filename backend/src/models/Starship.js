const { sequelize, DataTypes } = require('../config/db');
const Users = require('./User');

const Starship = sequelize.define('Starship', {
	name: {
		type: DataTypes.STRING(100),
	},
	power: {
		type: DataTypes.INTEGER(5000),
	},
	description: {
		type: DataTypes.STRING(1000),
	},
	image: {
		type: DataTypes.STRING(500),
	},
});

module.exports = Starship;
