require('module-alias/register');
require('@utils/env-handler')();
const express = require('express');
const cors = require('cors');
const { pool } = require('./db');
const port = process.env.PORT || 3010;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello world');
});

(async () => {
	try {
		await pool.query('SELECT NOW()');
		console.log(`Succesfully connected to the ${process.env.POSTGRES_DB_NAME} database.`);
	} catch (err) {
		console.log(err);
	}
})();

app.listen(port, () => console.log(`app listening on port ${port}`));
