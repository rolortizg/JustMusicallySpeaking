const router = require('express').Router();
const User = require('../models/User');
const passport = require('passport');
//const sendWelcomeMail = require('../helpers/mailer').sendWelcomeMail;
//const sendTemplate = require('../helpers/mailer').sendTemplate;

//multer config
// const multer = require('multer');
// const upload = multer({dest: './public/assets'});

function isAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        console.log(req.user)
        return next()
    }else{
        res.json({message:"You don't have permission"});
    }
}

router.get('/loggedUser',isAuthenticated, (req,res)=>{
    User.findById(req.user._id)
    .populate('songs')
    .populate('followers')
    .populate('following')
    .then(user=>{
        console.log(user)
        return res.json(user)
    })
    .catch(e=>console.log(e))
});

router.post('/signup',(req,res,next) => {
    User.register(req.body, req.body.password)
    .then(user => res.json(user))
    .catch(e=>res.json(e))
});

router.post('/login', passport.authenticate('local'), (req,res,next) => {
    User.findById(req.user._id)
    .populate('songs')
    .populate('followers')
    .populate('following')
    .then(user => res.json(user))
    .catch(e => res.json(e))
   
})

router.get('/logout', function(req, res){
    req.logout();
    req.session.destroy()
    res.redirect('/');
  });

router.get('/users',(req,res)=>{
    User.find()
    .then(songs =>{
      return res.status(200).json(songs);
    })
    .catch(e=>(e))  
})

router.get('/profile/:id', (req, res) => {
    User.findById(req.params.id)
    .populate('songs')
    .populate('followers')
    .populate('following')
        .then(user => {
            if (!user) return res.status(404)
            return res.status(200).json(user);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
});

router.put('/profile/:id', (req,res,next) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .populate('songs')
    .populate('followers')
    .populate('following')
        .then(user => {
            return res.status(202).json(user)
        }).catch(err => {
            return res.status(404).json(err);
        })
  })
module.exports = router;