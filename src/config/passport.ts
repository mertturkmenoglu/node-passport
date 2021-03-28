import {Strategy as GoogleStrategy, StrategyOptions} from 'passport-google-oauth20';
import User from '../models/User';

const strategyOptions: StrategyOptions = {
    clientID: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    callbackURL: '/auth-success',
};

const googleStrategy = new GoogleStrategy(
    strategyOptions,
    (_accessToken, _refreshToken, profile, done) => {
        User.findOne({googleId: profile.id}).then(currentUser => {
            if (currentUser) {
                done(null, currentUser);
            } else {
                const user = new User({
                    username: profile.displayName,
                    googleId: profile.id,
                    image: profile._json.picture,
                });

                user.save()
                    .then((savedUser) => done(null, savedUser))
            }
        })

    }
);

export default googleStrategy;