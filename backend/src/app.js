require('module-alias/register');
require('@utils/env-handler')();
const express = require('express');
const cors = require('cors');
const { client } = require('./db');
const port = process.env.PORT || 3010;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello world');
});

client.connect();
client.query('SELECT NOW()', (err, res) => {
	if (err) console.log(err);
	console.log(`Successfully connected to the ${process.env.POSTGRES_DB_NAME} database`);
	client.end;
});

app.listen(port, () => console.log(`App listening on port ${port}`));
