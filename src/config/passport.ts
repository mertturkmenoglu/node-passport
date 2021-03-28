import { Strategy as GoogleStrategy, StrategyOptions } from 'passport-google-oauth20';

const strategyOptions: StrategyOptions = {
  clientID: process.env.GOOGLE_CLIENT_ID || '',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  callbackURL: '/auth-success',
};

const googleStrategy = new GoogleStrategy(
  strategyOptions,
  (_accessToken, _refreshToken, profile, done) => {
    
  }
);

export default googleStrategy;