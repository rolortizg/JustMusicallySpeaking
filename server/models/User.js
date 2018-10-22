const passportLocalMongoose = require('passport-local-mongoose');
const Schema = require('mongoose').Schema;


const userSchema = new require('mongoose').Schema({
    name:String,
    lastName:String,
    username:{
        type:String,
        default:'FB'
    },
    songs:[{
        type:Schema.Types.ObjectId,
        ref:'Song'
    }],
    // image: String,
    email: String,
    // profile:{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Profile'
    // },
    role:{
        type: String,
        default: 'USER'
    },
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

userSchema.plugin(passportLocalMongoose, {usernameField:'email'})

module.exports = require('mongoose').model('User', userSchema);