const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('DB Connection Successfull'))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

app.use('/server/auth', authRoute);

app.listen(8800, () => {
  console.log('backend server is running!');
});
