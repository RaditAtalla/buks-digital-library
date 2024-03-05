const db = require("./database");

function get(req, res) {
  // db.query(`SELECT * FROM lokasi`, (error, locations) => {
  //     if (error) throw (error)
  //     res.send({locations})
  // })

  db.query("SELECT * FROM lokasi", (error, locations) => {
    if (error) throw error;
    res.send({ locations });
  });
}

function add(req, res) {
    const lokasi = req.body.lokasi
    db.query(`INSERT INTO lokasi VALUES("", "${lokasi}")`, (error) => {
        if(error) throw error
        res.send({ isAdded: true})
    })
}

function handleDelete(req, res) {
  const lokasiId = req.params.id;
  db.query(`DELETE FROM lokasi WHERE LokasiID = ${lokasiId}`, (error, result) => {
    if (error) throw error;
    res.send({ message: "lokasi has been deleted succesfully" });
  });
}

module.exports = {
  add,
  get,
  handleDelete
};
