"use strict"

const {promisify} = require('util');
const  chalk      = require('chalk');
const  mysql      = require('mysql');






/*-- MySQL Connection --*/
let  pool     = mysql.createPool({
            host     : "localhost",
            port     : "3306",
            user     : "root",
            password : "root",
            database : "user_registration"           
});

/* Promisify Mysql Connection */
pool.query   = promisify(pool.query);

(async() =>{
  try{
    await pool.query('SELECT NOW() AS "theTime"');
    console.log(chalk.blue("Mysql Connected"));
  }catch(err){
    console.log(err);
  }
})();







module.exports.pool     = pool;



