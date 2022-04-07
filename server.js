const express = require('express');
const app = express();
const router = require('./routers/routes');
const db = require('./connectDB');

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`);
});
