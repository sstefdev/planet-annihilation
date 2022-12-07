const { sequelize, DataTypes } = require('../config/db');

const Highscore = sequelize.define('Highscore', {
	highscore: {
		type: DataTypes.INTEGER(10000),
	},
});

module.exports = Highscore;
