const { Client } = require('pg');
require('dotenv').config()

const DB_HOST = process.env.DB_HOST

async function get_connection() {
  const client = new Client({
    DB_HOST
  });
  await client.connect();
  return client;
}

module.exports = get_connection;