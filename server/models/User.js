const passportLocalMongoose = require('passport-local-mongoose');
const Schema = require('mongoose').Schema;


const userSchema = new require('mongoose').Schema({
    name:String,
    lastName:String,
    username:{
        type:String,
        default:'FB'
    },
    bio:String,
    favoriteGenres:String,
    songOTW:String,
    songs:[{
        type:Schema.Types.ObjectId,
        ref:'Song'
    }],
    liked:[{
        type:Schema.Types.ObjectId,
        ref:'Song'
    }],
    followers:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }],
    following:[{
        type:Schema.Types.ObjectId,
        ref:'User'
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