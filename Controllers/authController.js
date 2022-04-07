const db = require('../connectDB');
const jwt = require('jsonwebtoken');

const getToken = (payload) => {
  return jwt.sign(
    {
      id: payload.id,
      aadhaar: payload.aadhaar,
    },
    'JWTSECRETKEY'
  );
};

const register = (req, res) => {
  try {
    const { name, email, password, aadhaar, address } = req.body;
    console.log(req.body);

    let sql = `INSERT INTO VOTER(name, email, password, address, aadhaar) VALUES('${name}', '${email}', '${password}', '${address}', '${aadhaar}')`;

    db.query(sql, (err, result) => {
      if (err) console.log(err);
      else {
        const token = getToken({
          id: result.id,
          aadhaar: result.aadhaar,
        });
        console.log('Done!');

        console.log(result);
        return res.status(201).send({
          token,
          result,
        });
      }
    });
  } catch (error) {}
};

const signIn = (req, res) => {
  try {
    const { email, password } = req.body;

    let sql = `SELECT * FROM VOTER WHERE email='${email}' AND password='${password}'`;

    db.query(sql, (err, result) => {
      if (err) console.log(err);
      else {
        const token = getToken({
          id: result.id,
          aadhaar: result.aadhaar,
        });
        console.log('Done!');
        // console.log(result[0].email);
       return res.status(200).send({
          token,
          result,
        });
      }
    });
  } catch (error) {}
};



module.exports = {
  register,
  signIn,
};
