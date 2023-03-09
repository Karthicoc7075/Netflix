const mongoose = require('mongoose');

//www.thegamesdownload.net
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        default:''
    },
    likeMovies:{
        type:Array,
        default:[]
    }
},
{
    timestamps: true,
}
)



module.exports =  mongoose.model('user',UserSchema);