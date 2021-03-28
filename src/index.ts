import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';

dotenv.config();

import routes from './routes';
import googleStrategy from './config/passport';

passport.use(googleStrategy);

const app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});