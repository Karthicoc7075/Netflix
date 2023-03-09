const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const mongoDB = require('./db/mongodb');
const userRoute = require('./routes/user');
const movieRoute = require('./routes/movie');

app.use(cors(origin="*"))
app.use(express.json())
app.use('/movies',movieRoute);
app.use('/user',userRoute);

const PORT = process.env.PORT  || 5000;
const MONGODB_URL = process.env.MONGODB_URL;
function start(){
    mongoDB(MONGODB_URL)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`server started on http://localhost:${PORT}`);
        })
    })
    .catch((err)=>{
        console.log(err);
    });
}


start()