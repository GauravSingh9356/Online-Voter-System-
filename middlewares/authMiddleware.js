const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).send('UnAuthorised!');
    const { id, aadhaar } = jwt.verify(token, 'JWTSECRETKEY');
    req.user = {
      id,
      aadhaar,
    };
    next();
  } catch (err) {
    return res.status(500).send('Server Error!');
  }
};

module.exports = checkAuth;
