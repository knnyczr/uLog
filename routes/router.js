const r = require('express').Router();
const userController = require('../users/userViewController');
const postController = require('../controllers/photosController');

const dump = (req,res) => res.send(`you're on your way to, ${req.path}`);


r.route('/login')
  .get(userController.showloginForm);

r.route('/register')
  .get(dump);

r.route('/:id')
  .get(dump);

r.route('/') //user login landing
  .get(dump);

module.exports = r;
