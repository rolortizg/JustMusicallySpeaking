const router = require('express').Router();
const User = require('../models/User');
const passport = require('passport');
//const sendWelcomeMail = require('../helpers/mailer').sendWelcomeMail;
//const sendTemplate = require('../helpers/mailer').sendTemplate;

//multer config
// const multer = require('multer');
// const upload = multer({dest: './public/assets'});



router.post('/signup',(req,res,next) => {
    User.register(req.body, req.body.password)
    .then(user => res.json(user))
    .catch(e=>res.json(e))
});

router.post('/login', passport.authenticate('local'), (req,res,next) => {
    return res.json(req.user);
})

router.post('/logout', (req,res,next)=>{
    req.logout();
    res.send('cerrado ??? ');
});

module.exports = router;