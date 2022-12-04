require('module-alias/register');
require('@utils/env-handler')();
const express = require('express');
const cors = require('cors');
const { checkDbConnection } = require('@config/db');
const passportSetup = require('@config/passport-setup');
const authRoutes = require('@routes/auth-routes');
const port = process.env.PORT || 3010;
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

checkDbConnection();

app.listen(port, () => console.log(`App listening on port ${port}`));
