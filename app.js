const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Section Middleware
app.use("/", (req, res, next) => {
  res.send("This is our statrting app")
})
mongoose.connect("mongodb+srv://joelnwamba:O1CAuk0uu3PXWcw3@cluster4.fserp5k.mongodb.net/bookStore?retryWrites=true&w=majority").then(() => console.log("Connected to Database") ).then(() => {
  app.listen(5000)
}).catch((err)=> console.log(err))

