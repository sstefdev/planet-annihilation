require('module-alias/register');
require('@utils/env-handler')();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
require('@config/passport-setup');
const session = require('express-session');
const { sequelize, checkDbConnection } = require('@config/db');
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
		saveUninitialized: false,
		cookie: {
			httpOnly: true,
			sameSite: 'none', //<===
			expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
		},
	})
);

// Init passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', require('@routes/auth-routes'));
app.use('/api/users', require('@routes/user-routes'));
app.use('/api/highscores', require('@routes/highscore-routes'));
app.use('/api/planets', require('@routes/planet-routes'));
app.use('/api/starships', require('@routes/starship-routes'));
app.use('/api/enemies', require('@routes/enemy-routes'));

checkDbConnection();

// Sequelize db sync
sequelize.sync().then((req) => {
	require('@populate');
	app.listen(port, () => console.log(`App listening on port ${port}`));
});
