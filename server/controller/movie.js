const movieModel = require('../model/movie')

const getMovie =async(req,res)=>{
          const allMovies =await movieModel.find();
          res.status(200).json(allMovies);
}

const postMovie =async(req,res)=>{
    const movieData  = req.body
    const postMovies =await movieModel.create(movieData);
    console.log(postMovies);
    res.status(200).json(postMovies);
}


module.exports ={getMovie,postMovie}