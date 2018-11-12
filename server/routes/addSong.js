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
  .populate('user')
  .populate('likes')
  .then(songs =>{
    return res.status(200).json(songs);
  })
  .catch(e=>(e))
})

router.get('/:id', (req, res) => {
  Song.findById(req.params.id)
      .then(user => {
          if (!user) return res.status(404)
          return res.status(200).json(user);
      })
      .catch(err => {
          return res.status(500).json(err);
      });
});

router.put('/:id', (req,res,next) => {
  Song.findByIdAndUpdate(req.params.id, req.body, {new:true})
      .then(user => {
          return res.status(202).json(user)
      }).catch(err => {
          return res.status(404).json(err);
      })
})

module.exports = router;
