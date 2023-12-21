const express = require("express");
const {
    getAllUser,
    getUserById,
    getSelfUser,
} = require("../controller/user.controller");
const router = express.Router();
const {authenticateToken} = require('../middleware/auth.middleware');

router.get('/', getAllUser);
router.get('/:id', getUserById);

module.exports = router;