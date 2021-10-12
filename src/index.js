import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import models from './models';
import routes from './routes';

const app = express();
app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});
app.use('/get_users', routes.user);
app.listen(process.env.PORT, () =>
  console.log(`Application running on server port: ${process.env.PORT}!`),
);
