const { Sequelize } = require('sequelize');
const { database, username, password, host } = require('@sequelize/config/config')[process.env.NODE_ENV];

const sequelize = new Sequelize(database, username, password, {
	host,
	dialect: 'postgres',
});

const checkDbConnection = async () => {
	try {
		await sequelize.authenticate();
		console.log(`Connection has been established successfully with the ${database} database`);
	} catch (err) {
		console.error('Unable to connect to the database:', err);
	}
};

module.exports = { sequelize, checkDbConnection };
