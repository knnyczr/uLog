const r = require('express').Router();
const postController = require('../controllers/photosController');
const views = require('../controllers/viewsController');
const dump = (req,res) => res.send(`you're on your way to, ${req.path}`);


r.route('/new')
  .get(views.createOne);

r.route('/posts/:id/edit')
  .get(postController.showOne, views.edit)
  .put(postController.update, views.showOne);

r.route('/posts/:id')
  .delete(postController.destroy, views.destroy)
  .get(postController.showOne, views.showOne);

r.route('/:id')
  .put(postController.update);

r.route('/', (req, res) => res.render('/posts'));

r.route('/posts')
  .get(postController.index, views.showAllPosts)
  .post(postController.createP, views.showAllPosts);

  module.exports = r;
