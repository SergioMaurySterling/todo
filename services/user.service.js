// const boom = require('@hapi/boom');
const get_connection = require('../libs/postgres');
const { hash } = require('../pass-hash.js')

class user_service {
  constructor() {}

  async create(data) {
    const db = await get_connection();
    const hashed_password = hash(data.password)
    const new_user = await db.query(
      'INSERT INTO users(name, last_name, email, password, created_at) VALUES($1, $2, $3, $4, NOW()) RETURNING *',
      [
        data.name,
        data.last_name,
        data.email,
        hashed_password
      ]
    );
    await db.end();
    return new_user;
  }
}

module.exports = user_service;