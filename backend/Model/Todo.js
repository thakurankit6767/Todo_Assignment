const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// List of columns for todo schema
let Todo = new Schema(
  {
    todo: String,
  },
  {
    collection: "todos",
  }
);

module.exports = mongoose.model("Todo", Todo);
