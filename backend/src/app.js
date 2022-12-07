require('module-alias/register');
require('@utils/env-handler')();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
require('@config/passport-setup');
require('@models');
const session = require('express-session');
const { sequelize, checkDbConnection } = require('@config/db');
const authRoutes = require('@routes/auth-routes');
const { userRoutes } = require('@routes/user-routes');
const port = process.env.PORT || 3010;
const app = express();

// Cors config
const whitelist = ['http://localhost:3000'];
const corsOptions = {
	origin: function (origin, callback) {
		if (!origin || whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	methods: 'GET, POST, PUT, DELETE, OPTIONS',
	credentials: true,
};

// Cors and body parser
app.use(cors(corsOptions));
app.use(express.json());

// Sessions
app.use(
	session({
		secret: 'some secret',
		name: 'pa-cookie',
		proxy: true,
		resave: false,
		saveUninitialized: true,
	})
);

// Init passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Check db connection and populate db
checkDbConnection();

// Sequelize db sync
sequelize.sync().then((req) => {
	require('@populate');
	app.listen(port, () => console.log(`App listening on port ${port}`));
});
