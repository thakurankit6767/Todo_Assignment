// Importing important packages
const express = require("express");

// Using express and routes
const app = express();
const TodoRoute = express.Router();

// Employee module which is required and imported
let TodoModel = require("../Model/Todo");



TodoRoute.get("/", async (req, res) => {
  try {
    const allTodoItems = await TodoModel.find({});
    res.status(200).json(allTodoItems);
  } catch (err) {
    res.json(err);
  }
});

// // post List Of Todo

TodoRoute.post("/addtodo", async (req, res) => {
  try {
    const newItem = new TodoModel(req.body);
    //save this item in database
    const saveItem = await newItem.save();
    res.status(200).json(saveItem);
  } catch (err) {
    res.json(err);
  }
});




module.exports = TodoRoute;
