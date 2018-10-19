const express = require('express');
const router  = express.Router();
const Song = require('../models/Song')

/* GET home page */




router.post('/song', (req,res,next) => {
  console.log(req.file);
  console.log(req.body)
  Song.create(req.body)
  .then(songs => res.json(songs))
  .catch(e=>res.json(e))
});

router.get('/song', (req,res,next)=>{
  Song.find()
  .then(songs =>{
    return res.status(200).json(songs);
  })
  .catch(e=>(e))
})

module.exports = router;
