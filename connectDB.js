const mysql = require('mysql');
const dotenv = require('dotenv');
const app = require('express')();
// create connection
dotenv.config({ path: './config.env' });

const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.user,
  password: process.env.password,
  database: process.env.DB,
});

//connect

db.connect((err) => {
  if (err) console.log('Error ', err);
  else console.log('MySql connected!');
});

//create DB
// app.get('/createDB', (req, res) => {
//   let sql = 'CREATE DATABASE my_db';
//   db.query(sql, (err, result) => {
//     if (err) console.log(err);
//     else {
//       console.log(result);
//       res.send('Database created!');
//     }
//   });
// });

//create table

module.exports = db;
