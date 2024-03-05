const mysql = require("mysql")
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "raditya-12rpl1-ukk",
  connectionLimit: 10,
})

module.exports = db