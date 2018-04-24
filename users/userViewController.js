module.exports ={

  showloginForm(req,res){
    // res.send('login form here')
    res.render('../views/login')
  },
  showRegisterForm(req,res){
    res.render('../views/register')
  },


}
