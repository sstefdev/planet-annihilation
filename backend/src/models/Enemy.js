const { sequelize, DataTypes } = require('../config/db');
const Planet = require('./Planet');

const Enemy = sequelize.define('Enemy', {
	name: {
		type: DataTypes.STRING(100),
	},
	description: {
		type: DataTypes.STRING(1000),
	},
	image: {
		type: DataTypes.STRING(500),
	},
});

Enemy.hasOne(Planet, {
	foreignKey: 'enemy_id',
});

module.exports = Enemy;
