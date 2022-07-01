/*Ensure MySQL Workbench has local server running with a 
Create database running named "surfboard_challenge"
Update user & password to run locally
*/

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

 module.exports = {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'rootroot',
      database: 'surfboard_challenge',
      charset: 'utf8',
    }
};