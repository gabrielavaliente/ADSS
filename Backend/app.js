const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const database = require("./config/database.config");
const cors = require('cors');

const apiRouter = require("./routes/index.router");

const app = express();
database.connect();

app.use(cors({
}));

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

//Logger para request
app.use(logger("dev"));

//Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Static routers
app.use(express.static(path.join(__dirname, "public")));


//API Router

app.use("/api", apiRouter);

module.exports = app;