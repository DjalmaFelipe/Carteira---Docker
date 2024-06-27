// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'postgres', // substitua com seu usuário do PostgreSQL
//   host: '192.168.0.25', // substitua com o host do seu banco de dados
//   database: 'postgres', // substitua com o nome do seu banco de dados
//   password: '1234', // substitua com sua senha
//   port: 5432, // substitua com a porta do seu banco de dados
// });

// module.exports = pool;
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // substitua com seu usuário do PostgreSQL
  host: '172.17.0.2', // substitua com o host do seu banco de dados
  database: 'postgres', // substitua com o nome do seu banco de dados
  password: '1234', // substitua com sua senha
  port: 5432, // substitua com a porta do seu banco de dados
});

module.exports = pool;