import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import mongoose, { ConnectOptions } from 'mongoose';
import cookieSession from 'cookie-session';

dotenv.config();

import routes from './routes';
import googleStrategy from './config/passport';
import User from "./models/User";

passport.use(googleStrategy);

passport.serializeUser((user, done) => {
  done(null, (user as any).id);
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

const app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(cookieSession({
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24 * 10, // 10 days
  keys: [process.env.COOKIE_SECRET || ''],
}));

app.use(passport.initialize());
app.use(passport.session());

const mongooseOptions: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose.connect(process.env.MONGO_URI || '', mongooseOptions, () => {
  console.log('Connected to MongoDB');
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});