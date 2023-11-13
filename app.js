const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();
// const methodOverride = require("method-override");
const app = express();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(3000);
    console.log("Connected to DB");
  })
  .catch((error) => console.log(error));

// middleware & static files 
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.use('/tasks', )

//Task routes