require('dotenv').config()

const API_KEY = process.env.API_KEY

function check_api_key(req, res, next){
  const api_key = req.headers['api'];
  if(api_key === API_KEY){
    next();
  } else {
    res.send('Unauthorized');
  }
}

module.exports = check_api_key

