import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import mongoose, { ConnectOptions } from 'mongoose';

dotenv.config();

import routes from './routes';
import googleStrategy from './config/passport';

passport.use(googleStrategy);

const app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', 'src/views');

const mongooseOptions: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGO_URI, mongooseOptions, () => {
  console.log('Connected to MongoDB');
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});