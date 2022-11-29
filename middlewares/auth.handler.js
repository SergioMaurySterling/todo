const boom = require('@hapi/boom');

function check_api_key(req, res, next){
  const api_key = req.headers['api'];
  if(api_key === '123'){
    next();
  } else {
    next(boom.unauthorized());
  }
}

module.exports = { check_api_key }