const members = require('../models/member');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      res.json(await members.find());
    } catch (err) {
      next(err);
    }
  }
};
