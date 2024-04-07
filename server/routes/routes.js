const express = require('express');
const { saveUserTax } = require("../controller/userControllers");

const router = express.Router();

router.post('/usertax', saveUserTax);

module.exports = router;
