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
  .get(views.createOne);

r.route('/posts/:id/edit')
  .get(postController.showOne, views.edit)
  .put(postController.update, views.showOne);

r.route('/:id')
  .put(postController.update);

r.route('/posts/:id')
  .get(postController.showOne, views.showOne)
  .delete(postController.destroy);


  module.exports = r;
