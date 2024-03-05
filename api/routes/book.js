const express = require("express");
const multer = require("multer");
const { readBook, uploadBook, handleDelete, handleEdit, readBookInEdit, getBookDetail, handleLike, getPeminjaman } = require("../middleware/bookController");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "public/book-covers/");
	},
	filename: function (req, file, cb) {
		cb(null, Math.floor(Math.random() * (999 - 100)) + 100 + "_" + file.originalname);
	},
});

const upload = multer({ storage, limits: { fileSize: 1048576 } });
const router = express.Router();

router.get("/", readBook);
router.post("/upload", upload.single("foto"), uploadBook);
router.delete("/delete/:id", handleDelete);
router.get("/edit/:id", readBookInEdit);
router.patch("/edit/:id", handleEdit);
router.get("/view/:id", getBookDetail);
router.post("/like/:id", handleLike);
router.post("/peminjaman", getPeminjaman);

module.exports = router;
