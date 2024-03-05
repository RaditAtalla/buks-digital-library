const express = require("express");
const { add, display, revoke } = require("../middleware/moderatorController");
const router = express.Router();

router.get("/", display);
router.post("/add", add);
router.post("/revoke", revoke);

module.exports = router;
