'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Spaceships extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Spaceships.init(
		{
			id: {
				type: DataTypes.NUMBER,
				primaryKey: true,
			},
			name: DataTypes.STRING,
			power: DataTypes.NUMBER,
			image: DataTypes.STRING,
			created_at: DataTypes.TIME,
		},
		{
			sequelize,
			modelName: 'Spaceships',
		}
	);
	return Spaceships;
};