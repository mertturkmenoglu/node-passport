import {Strategy as GoogleStrategy, StrategyOptions as GoogleStrategyOptions, VerifyCallback} from 'passport-google-oauth20';
import {Profile, Strategy as GitHubStrategy} from 'passport-github2';
import User from '../models/User';

const googleStrategyOptions: GoogleStrategyOptions = {
    clientID: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    callbackURL: '/auth-success',
};

const googleStrategy = new GoogleStrategy(
    googleStrategyOptions,
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

const githubStrategy = new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID as string,
    clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    callbackURL: '/auth/github-callback',
  }, (_accessToken: string, _refreshToken: string, profile: Profile, done: VerifyCallback) => {
      User.findOne({githubId: profile.id}).then(currentUser => {
            if (currentUser) {
                done(null, currentUser);
            } else {
                let p = '';
                if (profile.photos) {
                  p = profile.photos[0].value
                }
                const user = new User({
                    username: profile.displayName,
                    githubId: profile.id,
                    image: p,
                });

                user.save()
                    .then((savedUser) => done(null, savedUser))
            }
        })
  }
);

export {
  googleStrategy,
  githubStrategy,
};