const router = require('express').Router();
const List      = require('../models/List');
const User      = require('../models/User');

router.post('/profile', (req,res,next) => {
  List.create(req.body)
  .then(list => {
    res.json(list)
  })
  .catch(e=>res.json(e))
})

// router.get('/list-detail/:id', (req,res) => {
//   List.findById(req.params.id)
//   .populate('user')
//   .then(list => {
//     if (!list) return res.status(404);
//     return res.status(200).json(list);
//   })
//   .catch(err => {
//     return res.status(500).json(err);
//   })
// })

module.exports = router;