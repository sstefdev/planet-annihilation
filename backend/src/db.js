const { Pool, Client } = require('pg');

const db_host = process.env.NODE_ENV === 'production' ? process.env.POSTGRES_HOST : '0.0.0.0';

const credentials = {
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	host: db_host,
	port: process.env.POSTGRES_PORT,
	database: process.env.POSTGRES_DB,
};

const pool = new Pool(credentials);
const client = new Client(credentials);

module.exports = {
	pool,
	client,
};
