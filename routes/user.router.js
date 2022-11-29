const express = require('express');
const user_service = require('../services/user.service');
const {
  create_user,
  // update_user,
  // delete_user,
  // get_user,
  // login_user
} = require('../schemas/user.schema');
const validator_handler = require('../middlewares/validator.handler');

const router = express.Router();
const service = new user_service();

router.post('/',
  validator_handler(create_user, 'body'),
  async (req, res) => {
    try {
      const user = await service.createUser(req.body);
      res.send(user);
    } catch (error) {
      res.send(error);
    }
});

module.exports = router;