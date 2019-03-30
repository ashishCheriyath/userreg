const express 			= require('express');
const router 			= express.Router();
const userController 	= require('./../controllers/userController');

router.post('/registerUser', userController.userRegistration);


module.exports = router;
