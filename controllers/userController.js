'user strict';
var sql = require('./../model/model.js');
const {pool} 	       = require('./../model/model');

module.exports.userRegistration = async(req, res,next) => 
{    
    try{
         console.log(req.body);
         let data = await pool.query("select * from user")
         res.send(data)
         
     
   }catch(err){
      console.log(err);
     
    return next(err);
   }
};