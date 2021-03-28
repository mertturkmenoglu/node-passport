import passport from 'passport';
import { Strategy as GoogleStrategy, StrategyOptions } from 'passport-google-oauth20';

const strategyOptions: StrategyOptions = {
  clientID: '',
  clientSecret: '',
  callbackURL: ''
};

const googleStrategy = new GoogleStrategy(strategyOptions, () => {});


passport.use(googleStrategy);