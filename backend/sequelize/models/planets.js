'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Planets extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Planets.init(
		{
			id: {
				type: DataTypes.NUMBER,
				primaryKey: true,
			},
			name: DataTypes.STRING,
			health: DataTypes.NUMBER,
			image: DataTypes.STRING,
			created_at: DataTypes.TIME,
		},
		{
			sequelize,
			modelName: 'Planets',
		}
	);
	return Planets;
};
