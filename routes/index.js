const express = require('express');

const user = require('./user.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/user', user);
}

module.exports = routerApi;


// 1. user account
// 2. user personal created folders
// 3. user todo list