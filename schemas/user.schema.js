const Joi = require('joi').extend(require('@joi/date'));

const create_user = Joi.object({
  name: Joi.string(),
  last_name: Joi.string(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net', 'co', 'es'] }
  }),
  password: Joi.string().min(8)
})

const update_user = Joi.object({
  name: Joi.string(),
  last_name: Joi.string(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net', 'co', 'es'] }
  }),
  password: Joi.string().min(8)
})

const delete_user = Joi.object({
  user_id: Joi.number()
})

const get_user = Joi.object({
  user_id: Joi.number()
})

const login_user = Joi.object({
  user_id: Joi.number()
})

module.exports = {
  create_user,
  update_user,
  delete_user,
  get_user,
  login_user
};