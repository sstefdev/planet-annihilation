const { Pool, Client } = require('pg');

const credentials = {
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	host: process.env.POSTGRES_HOST,
	port: process.env.POSTGRES_PORT,
	database: process.env.POSTGRES_DB,
};

const pool = new Pool(credentials);
const client = new Client(credentials);

module.exports = {
	pool,
	client,
};
