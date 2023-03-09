const mongoose = require('mongoose');
mongoose.set({strictQuery:false})

async function mongooseDB(url){
    try{
        const data = await mongoose.connect(url)
        return data
    }
    catch(error){
        console.log(error);
    }
}

module.exports = mongooseDB