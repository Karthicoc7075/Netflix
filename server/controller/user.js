const UserModel = require('../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const signUp = async (req, res) => {
    const { email, username, password } = req.body;

    const oldUser = await UserModel.findOne({ email })

    if (oldUser) {
        return res.status(400).json("email already exist!!")
    }
    const SALTING_ROUNDS = 12;

    const encryptPassword = await bcrypt.hash(password, SALTING_ROUNDS);

    const newUser = await UserModel.create({ email, password: encryptPassword, username });

    const token = jwt.sign({ id: newUser._id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
console.log({ token, user: newUser })   ;
    res.status(200).send({ token, user: newUser });
}

const signIn = async (req, res) => {
    const { email, username, password } = req.body;

    const user =await UserModel.findOne({email:email});


    if (!user) {
        return res.status(400).json("email Invaild")
    }

    const correctPassword =await bcrypt.compare(password,user.password);
    
    if(!correctPassword){
        return res.status(400).json("Password incorrect !!")
    }

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })

    res.status(200).send({ token, user });
}

const verifyUser =async(req,res)=>{
    const {email} = req.body
    const user = await UserModel.findOne({email:email});

    if(user){
       return res.json({email:email,path:'signIn/password?'})
    }


     res.json({email,path:'signUp/registration'})
    
}

const  likeMovie =async(req,res)=>{
   const {movieId} = req.body
   console.log(req.userId);
   const user = await UserModel.findOne({_id:req.userId})
console.log(user);
   const index = user.likeMovies.findIndex((id)=> id==movieId)
   console.log("index:",index);
   if(index==-1){
    user.likeMovies.push(movieId)
   }else{
        user.likeMovies=  user.likeMovies.filter((movie)=>movie!=movieId)
        }
  await UserModel.findByIdAndUpdate(req.userId,user);

   res.status(201).json(user)
}

module.exports = { signUp, signIn,verifyUser,likeMovie }

