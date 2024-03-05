const db = require("./database");

function add(req, res) {
	const username = req.body.username;

	db.query(`SELECT * FROM user WHERE username = "${username}"`, (error, data) => {
		if (error) throw error;

		if (data[0] == null) {
			console.log("user not found");
			return;
		}

		if (data[0].Akses == "petugas" || data[0].Akses == "admin") {
			console.log("petugas baru harus peminjam");
			return;
		}

		db.query(`UPDATE user SET Akses = 'petugas' WHERE username = '${username}'`, (error) => {
			if (error) throw error;
			console.log(`${username} adalah petugas baru`);
		});
	});

	res.send({ isAdmin: true });
}

function display(req, res) {
	db.query("SELECT * FROM user WHERE Akses = 'petugas'", (error, petugas) => {
		if (error) throw error;
		res.send({ petugas });
	});
}

function revoke(req, res) {
	const id = req.body.id;

	db.query(`UPDATE user SET Akses = "peminjam" WHERE UserID = ${id}`, (error) => {
		if (error) throw error;
	});
}

module.exports = { add, display, revoke };
