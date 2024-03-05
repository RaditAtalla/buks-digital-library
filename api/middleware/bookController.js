const { Cookie } = require("express-session");
const db = require("./database");
const path = require("path");

function uploadBook(req, res) {
  const title = req.body.judul;
  const cover = req.file;
  const coverType = path.parse(cover.filename).ext;
  const author = req.body.penulis;
  const publisher = req.body.penerbit;
  const releaseYear = req.body.tahunTerbit;
  const pageCount = req.body.jumlahHalaman;
  const category = req.body.kategori;
  const language = req.body.bahasa;
  const location = req.body.lokasi;
  const description = req.body.deskripsi;

  db.query(
    `INSERT INTO buku VALUES("", "${title}", "${author}", "${publisher}", "${releaseYear}", "${
      path.parse(cover.filename).name
    }", "${coverType}", "${language}", "${pageCount}", "${db.escape(
      description
    )}", CURDATE())`,
    (error) => {
      if (error) throw error;
      db.query(
        `SELECT * FROM buku WHERE Judul = '${title}'`,
        (error, books) => {
          if (error) throw error;

          db.query(
            `SELECT * FROM lokasi WHERE Lokasi = "${location}"`,
            (error, locations) => {
              if (error) throw error;
              if (locations[0].Lokasi == location) {
                db.query(
                  `INSERT INTO lokasibuku VALUES("", ${locations[0].LokasiID}, ${books[0].BukuID})`,
                  (error) => {
                    if (error) throw error;
                    res.send({ uploaded: true });
                  }
                );
              }
            }
          );
        }
      );
    }
  );
}

function readBook(req, res) {
  db.query("SELECT * FROM buku", (error, books) => {
    if (error) throw error;
    res.send({ books });
  });
}

function readBookInEdit(req, res) {
  const id = req.params.id;
  db.query(`SELECT * FROM buku WHERE BukuID = ${id}`, (error, books) => {
    if (error) throw error;
    res.send({ books });
  });
}

function handleDelete(req, res) {
  const bookId = req.params.id;
  db.query(`DELETE FROM buku WHERE BukuID = ${bookId}`, (error, result) => {
    if (error) throw error;
    res.send({ message: "book has been deleted succesfully" });
  });
}

function handleEdit(req, res) {
  const bookId = req.params.id;
  res.send(bookId);
}

function getBookDetail(req, res) {
  const id = req.params.id;

  db.query(`SELECT * FROM buku WHERE BukuID = ${id}`, (error, details) => {
    if (error) throw error;
    res.send({ details });
  });
}

function handleLike(req, res) {
  const id = req.params.id;
}

function getPeminjaman(req, res) {
  db.query(`SELECT * FROM peminjaman`, (error, peminjaman) => {
    if (error) throw error;
    res.send({ peminjaman });
  });
}

module.exports = {
  uploadBook,
  readBook,
  readBookInEdit,
  handleDelete,
  handleEdit,
  getBookDetail,
  handleLike,
  getPeminjaman,
};
