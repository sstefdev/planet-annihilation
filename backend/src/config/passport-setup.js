var bcrypt = require('bcryptjs');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('@models/User');
const { userExists } = require('@routes/user-routes');

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'some secret';

passport.use(
	new GoogleStrategy(
		{
			callbackURL: '/api/auth/google/redirect',
			clientID: process.env.GOOGLE_PLUS_CLIENT_ID,
			clientSecret: process.env.GOOGLE_PLUS_CLIENT_SECRET,
		},
		async (accesToken, _refreshToken, { id, displayName, photos, emails }, done) => {
			try {
				const user = await userExists('google_id', id);

				if (user.length > 0) {
					return done(null, user[0], accesToken);
				} else {
					const user = await User.create({
						email: emails[0].value,
						username: displayName,
						image: photos[0].value,
						google_id: id,
					});
					return done(null, user[0], accesToken);
				}
			} catch (err) {
				done(err);
			}
		}
	)
);

passport.use(
	new JwtStrategy(opts, async (jwt_payload, done) => {
		try {
			const user = await userExists('id', jwt_payload.id);
			if (user.length > 0) {
				return done(null, user[0]);
			} else {
				return done(null, false);
			}
		} catch (err) {
			done(err);
		}
	})
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	try {
		const user = userExists('google_id', id);
		done(null, user.id);
	} catch (err) {
		done(err);
	}
});
