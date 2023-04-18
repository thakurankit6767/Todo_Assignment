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

// // post List Of todo

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

// To Get Employee Details By Employee ID
TodoRoute.get("/edittodo/:id", async (req, res) => {
  try {
    //find the item by its id and update it
    const updateItem = await TodoModel.findById(req.params.id);
    res.status(200).json(updateItem);
  } catch (err) {
    res.json(err);
  }
});

//update item
TodoRoute.put("/updatetodo/:id", async (req, res) => {
  try {
    //find the item by its id and update it
    const updateItem = await TodoModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updateItem);
  } catch (err) {
    res.json(err);
  }
});

//Delete item from database
TodoRoute.delete("/deletetodo/:id", async (req, res) => {
  try {
    //find the item by its id and delete it
    const deleteItem = await TodoModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Item Deleted");
  } catch (err) {
    res.json(err);
  }
});

module.exports = TodoRoute;
