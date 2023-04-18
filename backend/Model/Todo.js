const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// List of columns for Employee schema
let Todo = new Schema(
  {
    todo: {
      type: String,
    },
  },
  {
    collection: "todos",
  }
);

module.exports = mongoose.model("Todo", Todo);
