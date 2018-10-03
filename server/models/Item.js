const Schema = require('mongoose').Schema;


const itemSchema = new require('mongoose').Schema({
    title:String,
    image:String,
    description: String,
    category:String,
    size:Number,
    buys:{
        type:Number,
        default:0
    },
    
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


module.exports = require('mongoose').model('Item', itemSchema);