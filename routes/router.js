const r = require('express').Router();

const dump = (req,res) => res.send(`you're on your way to, ${req.path}`)

r.route('/') //landing
  .get(dump);

r.route('/login')
  .get(dump);

r.route('/register')
  .get(dump);

r.route('/:id')
  .get(dump);

module.exports = r; 
