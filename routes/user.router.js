//routing
const express = require('express');
const router = express.Router();
//middlewares
const validator_handler = require('../middlewares/validator.handler');
const auth_handler = require('../middlewares/auth.handler');
//services
const user_service = require('../services/user.service');
const service = new user_service();
//schemas
const {
  create_user,
  // update_user,
  // delete_user,
  // get_user,
  // login_user
} = require('../schemas/user.schema');

//routes
router.post('/',
  auth_handler,
  validator_handler(create_user, 'body'),
  async (req, res) => {
    try {
      const user = await service.create(req.body);
      res.send(user);
    } catch (error) {
      res.send(error);
    }
});

module.exports = router;