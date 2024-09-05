const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: String,
  author: String,
  genre: String,
});

module.exports = mongoose.model("Books", bookSchema);


