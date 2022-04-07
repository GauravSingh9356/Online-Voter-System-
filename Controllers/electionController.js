const db = require('../connectDB');

const standForElection = (req, res) => {
  try {
    const { id, aadhaar } = req.user;
  } catch (error) {}
};

module.exports = { standForElection };
