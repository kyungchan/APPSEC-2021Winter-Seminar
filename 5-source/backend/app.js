var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const mongoose = require("mongoose");

var boardRouter = require("./routes/board");

var app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/exmaple2")
  .then(() => {
    console.log("Connectd");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/board", boardRouter);

module.exports = app;
