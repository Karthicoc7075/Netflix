const jwt = require("jsonwebtoken");
require('dotenv').config()

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    // const isCustomAuth = token.length < 500;
    let decodedData;

    if (token) {      
      decodedData = jwt.verify(token,process.env.JWT_SECRET);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.id;
    }    


    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth