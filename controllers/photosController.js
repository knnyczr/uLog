const m = require('../models/dbq.js');

module.exports ={
  // index(req, res, next){
  //   m.findAllposts()
  //   .then((postsData) =>{
  //     res.locals.m = postsData;
  //     next();
  //   }).catch((err) => {
  //     res.json(err)
  //     next();
  //   });
  // },
  index(req, res, next) {
    m.findAllPosts()
      .then(postData => {
        console.log("yo i am in the photosController index function mofos",postData)
        res.locals.photos = postData;
        next();
      }).catch((err) => {
        res.json(err)
        next();
      });
  },
  createP(req, res, next){
    // res.render('postViews/index')
    m.createPost({
      creator: req.body.creator,
      caption: req.body.caption,
      url: req.body.caption
    })
      .then((data) => {
        res.locals.m = data;
        res.json(postData);
        next();
      }).catch((err) => res.json(err))
  },
  update(req, res, next){
    m.updatePost()
      .then((data) => {
        res.locals.m = data;
        res.json(data);
        next();
      }).catch((err) => res.json(err))
    // res.render('postviews/index')
  },
  destroy(req, res, next){
    // res.render('postViews/index')
    m.destroy(req.params.id)
      .then((data) => {
        console.log()
        res.send('destroy is working')
      })
      .catch((err) => {
        res.json(err);
        next();
      });
  }
};
