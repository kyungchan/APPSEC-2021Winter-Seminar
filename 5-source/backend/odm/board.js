const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
  content: { type: String, required: true },
});

const boardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
  content: { type: String, required: true },
  comments: { type: [commentsSchema] },
});

module.exports = mongoose.model("board", boardSchema);
