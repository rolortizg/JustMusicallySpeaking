const Schema = require('mongoose').Schema;


const songSchema = new require('mongoose').Schema({
    name:String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    artist:String,
    image:String,
    description: String,
    likes:{
        type:Number,
        default:0
    },
   
    
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


module.exports = require('mongoose').model('Song', songSchema);