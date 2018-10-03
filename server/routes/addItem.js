const express = require('express');
const router  = express.Router();
const Item = require('../models/Item')

/* GET home page */


//multer config
const multer = require('multer');
const upload = multer({dest: '../public/assets'});


// router.post('/item',upload.single('image'), (req,res,next) => {
//   console.log(req.file);
//   console.log(req.body)
//   if(req.file) req.body.image = `${req.protocol}://${req.headers.host}/assets/${req.file.filename}`
//   Item.create(req.body)
//   .then(items => res.json(items))
//   .catch(e=>res.json(e))
// });


router.post('/item',upload.single('image'), (req,res,next) => {
  console.log(req.file);
  console.log(req.body)
  if(req.file) req.body.image = `${req.protocol}://${req.headers.host}/assets/${req.file.filename}`
  Item.create(req.body)
  .then(items => res.json(items))
  .catch(e=>res.json(e))
});

module.exports = router;
