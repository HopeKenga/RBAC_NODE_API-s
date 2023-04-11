const { createPool } = require ("mysql");

const pool = createPool({
    host: 'localhost',
    port: '8000',
    user: 'root',
    database: 'test',
    connectionLimit: 10
})

module.exports = pool;
