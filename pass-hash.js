const bcrypt = require('bcrypt')

async function verify(password, user_hash){
  const user_password = password;
  const hash = user_hash;
  return await bcrypt.compare(user_password, hash)
}

async function hash(password){
  const my_password = password;
  const hashed_password = await bcrypt.hash(my_password, 10)
  return hashed_password
}

module.exports = {
  verify,
  hash
}