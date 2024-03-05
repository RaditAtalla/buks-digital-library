const express = require("express");
const app = express();
const cors = require("cors");
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const bookRouter = require("./routes/book");
const modRouter = require("./routes/moderator");
const locationRouter = require("./routes/lokasi");
const categoryRouter = require("./routes/kategori")
const session = require("express-session");
const db = require("./middleware/database");
const MySQLStore = require("express-mysql-session")(session);

const sessionStore = new MySQLStore({}, db);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(
  session({
    secret: "rachmadie",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/book", bookRouter);
app.use("/moderator", modRouter);
app.use("/lokasi", locationRouter);
app.use("/category", categoryRouter);

app.listen(3000, () => {
  console.log("==Server on http://localhost:3000");
});
