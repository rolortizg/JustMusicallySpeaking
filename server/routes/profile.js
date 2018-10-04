const router = require('express').Router();
const User = require('../models/User');
const passport = require('passport');

function isAuthenticated(req,res,next){
  if(req.isAuthenticated()){
      console.log(req.user)
      return next()
  }else{
      res.json({message:"no tienes permiso"});
  }
}

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
      res.redirect('/private')
  }else{
      next();
  }
}


router.get('/profile',isAuthenticated, (req, res) => {
  console.log(req.user)
  User.findById(req.user._id)
      .then(user => {
          return res.status(200).json(user); //200: The request was fulfilled.                       
      })
      .catch(e => next(e))

});

// router.get('/profile/artists',(req,res)=>{
//     spotifyApi.searchArtists(/*'HERE GOES THE QUERY ARTIST'*/)
//     .then(data => {
//       // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
//     })
//     .catch(err => {
//       // ----> 'HERE WE CAPTURE THE ERROR'
//     })
// })

module.exports = router;
