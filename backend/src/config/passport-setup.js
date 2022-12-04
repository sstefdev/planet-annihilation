const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
	new GoogleStrategy(
		{
			callbackURL: '/auth/google/redirect',
			clientID: process.env.GOOGLE_PLUS_CLIENT_ID,
			clientSecret: process.env.GOOGLE_PLUS_CLIENT_SECRET,
		},
		() => {}
	)
);
