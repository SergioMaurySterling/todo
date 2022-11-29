const { Client } = require('pg');
require('dotenv').config()

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DB = process.env.DB_DB

async function get_connection() {
  const client = new Client({
    host: DB_HOST,
    port: 5432,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DB,
    ssl: {
      rejectUnauthorized: false
    }
  });
  await client.connect();
  return client;
}

module.exports = get_connection;