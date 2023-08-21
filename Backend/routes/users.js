const express = require('express');

const router = express.Router();

const userController = require("../controllers/userController");

router.post('/', userController.postData);

router.get('/', userController.getData);

router.delete('/:id', userController.deleteData);

module.exports = router;