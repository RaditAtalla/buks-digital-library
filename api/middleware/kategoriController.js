const db = require("./database");

function get(req, res) {
  db.query("SELECT * FROM kategoribuku", (error, category) => {
    if (error) throw error;
    res.send({ category });
  });
}

function add(req, res) {
    const kategori = req.body.categories
    db.query(`INSERT INTO kategoribuku VALUES("", "${kategori}")`, (error) => {
        if(error) throw error
        res.send({ isAdded: true})
    })
}

function handleDelete(req, res) {
  const kategoriId = req.params.id;
  db.query(`DELETE FROM kategoribuku WHERE KategoriID = ${kategoriId}`, (error, result) => {
    if (error) throw error;
    res.send({ message: "kategori has been deleted succesfully" });
  });
}

module.exports = {
  add,
  get,
  handleDelete
};
