const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    listName: String,
    songs:[{
      type:Schema.Types.ObjectId,
      ref:'Song'
    }],
    //not sure if necessary, but prob good practice
    savedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

module.exports = mongoose.model('List', listSchema)