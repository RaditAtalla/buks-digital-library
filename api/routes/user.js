const express = require("express");
const { handleRegister, handleLogin, getUser, handleBan, getBannedUser, handleUnban, getUserDetail, getCurrentUser } = require("../middleware/userController");
const router = express.Router();

router.post("/login", handleLogin);
router.post("/register", handleRegister);
router.post("/ban/:id", handleBan);
router.post("/unban/:id", handleUnban);
router.get("/", getUser);
router.get("/view/:id", getUserDetail);
router.get("/banned", getBannedUser);

module.exports = router;
