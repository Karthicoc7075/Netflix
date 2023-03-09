const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    categories:{
        type:String,
        required:true
    },
    genres:{
        type:Array,
        required:true
    },
    logo:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    posterImg:{
        type:String,
        required:true
    },
    stars:{
        type:String,
        required:true
    },
    creators:{
        type:String
    },
    languages:{
        type:String,
        required:true
    },
    quality:{
        type:String,
        required:true
    }
    
})


module.exports =mongoose.model('movies',MovieSchema)