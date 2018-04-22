module.exports = {

  showAllPosts(req,res){
    debugger;
    res.render('postViews/index', {
      data: res.locals.photos
    });
  },
  createOne(req,res){
    res.render('postViews/create')
  },

}
