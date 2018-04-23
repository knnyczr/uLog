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
        // console.log("yo i am in the photosController index function mofos",postData)
        res.locals.photos = postData;
        next();
      }).catch((err) => {
        res.json(err)
        next();
      });
  },
  showOne(req,res,next){
    m.findOne(req.params.id)
      .then((data) => {
        res.locals.photos = data;
        next();
      }).catch((err) => {
        console.log(err);
        res.json(err);
        next();
      })
  },
  createP(req, res, next){
    m.createPost({
      // creator: req.body.creator,
      caption: req.body.caption,
      url: req.body.url
    }).then((data) => {
        // res.locals.photos = data;
        res.redirect(`/posts/`);
        next();
      }).catch((err) => res.status(500).json({err:err}));
  },
  update(req, res, next){
    m.updatePost({
      caption: req.body.caption,
      url: req.body.url
    }, req.params.id)
      .then((data) => {
        console.log(data);
        res.locals.photos = data;
        res.redirect('/edit')
        // res.json(data);
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
