const pg = require('pg-promise')();
const config = {
 host: 'localhost',
 port: 5432,
 database: 'ulog'
}
const db = pg(process.env.DATABASE_URL || config);

module.exports = db;
