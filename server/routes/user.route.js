const express = require("express");
const {getAllUser,getUserByEmail} = require('../controllers/user.controller');

const router = express.Router();


//get All User
router.get("/get-all-vab", getAllUser)

// get All User by id
router.get("/get-vab/:query", getUserByEmail)

module.exports = router;