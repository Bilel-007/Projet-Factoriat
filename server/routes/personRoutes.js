const express = require ('express');
const { register,login, getPersonData } = require('../controllers/personControllers');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router= express.Router();

//@desc Register a new Person (def role: user)
//@params POST/api/person/Register
//@access PUBLIC
router.post('/register', register);

//@desc Login a Person (def role: user)
//@params POST/api/person/Login
//@access PUBLIC
router.post('/login', login);
router.get('/',authMiddleware, getPersonData);

module.exports= router;
