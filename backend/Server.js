// Imported required packages
const express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  mongoose = require("mongoose");

// MongoDB Databse url
var mongoDatabase =
  "mongodb+srv://ankit:ankit12345@cluster0.rrtc5u1.mongodb.net/todocrudapp";

// Created express server
const app = express();
mongoose.Promise = global.Promise;

// Connect Mongodb Database
mongoose.connect(mongoDatabase, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("There is problem while connecting database " + err);
  }
);

// All the express routes
const TodoRoutes = require("./Routes/Todo.route");

// Conver incoming data to JSON format
app.use(bodyParser.json());



app.use(express.json());
// app.use(express.urlencoded());


// Enabled CORS
app.use(cors());

// Setup for the server port number
const port = 4000;

// const port = process.env.PORT || 4000;

// Routes Configuration
app.use("/todo", TodoRoutes);


// Staring our express server
const server = app.listen(port, function () {
  console.log("Server Lisening On Port : " + port);
});





//user schema 
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

const User = new mongoose.model("User", userSchema)

//routes routes


app.post("/Login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then(user => {
      if (user) {
        if (password === user.password) {
          res.send({ message: "Login success", user: user });
        } else {
          res.send({ message: "Wrong credentials" });
        }
      } else {
        res.send({ message: "User not registered" });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ message: "Server error" });
    });
});



app.post("/Register", async (req, res) => {
  //console.log(req.body);
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      res.send({ message: "User already exists" });
    } else {
      const newUser = new User({ name, email, password });
      await newUser.save();
      res.send({ message: "Registration successful" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server error" });
  }
});




// Connect Mongodb Database
mongoose.connect(mongoDatabase, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("There is problem while connecting database " + err);
  }
);
