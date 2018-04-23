const r = require('express').Router();
const postController = require('../controllers/photosController');
const views = require('../controllers/viewsController');
const dump = (req,res) => res.send(`you're on your way to, ${req.path}`);

r.route('/')
  .get();

r.route('/posts')
  .get(postController.index, views.showAllPosts)
  .post(postController.createP, views.showAllPosts);

r.route('/new')
  .get(views.createOne)

r.route('/posts/:id')
  .put(postController.update)
  .delete(postController.destroy);

  module.exports = r;
