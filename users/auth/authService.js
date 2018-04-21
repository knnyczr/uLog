const b = require('bcrypt');
const user = require('../model/user');

module.exports = {

  async login(req, res, next) {
  // catching all the errors in one place and pretending that it goes down in order
  try {
      const { username, password } = req.body;
      const user = await User.findOne(username);
      const valid = await bcrypt.compare(password, user.password);

      if(!valid) {
          throw { message : 'wrong password'}
      }
      req.session.user = user;
      next();
  } catch (err) {
      next(err);
  }
},

logout(req, res, next) {
    // destroy session
    // next will be called with either an error or undefined.
    // (negative or positive path)
    res.session.destroy(err => next(err));
  },

};
