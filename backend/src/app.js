require('module-alias/register');
require('@utils/env-handler')();
const express = require('express');
const cors = require('cors');
const { checkDbConnection } = require('./db');
const port = process.env.PORT || 3010;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello world');
});

checkDbConnection();

app.listen(port, () => console.log(`App listening on port ${port}`));
