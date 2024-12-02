const express = require("express");
const { getUser, saveUser } = require("../controllers/user.controller");
const port = 4000;
const router = express.Router();


router.get("/users",getUser);

router.post("/users", saveUser);

module.exports = router ;

