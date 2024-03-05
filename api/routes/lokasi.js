const express = require("express");
const { get, add, handleDelete } = require("../middleware/lokasiController");

const router = express.Router();

router.get("/", get);
router.post("/add", add);
router.delete("/delete/:id", handleDelete);

module.exports = router;
