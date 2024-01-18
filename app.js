const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();

// Section Middleware
app.use(express.json());
app.use("/books", router);
app.use("/", (req, res, next) => {
  res.send("This is our starting app");
});

mongoose
  .connect("mongodb+srv://joelnwamba:O1CAuk0uu3PXWcw3@cluster4.fserp5k.mongodb.net/bookStore?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database");
    app.listen(5000, () => {
      console.log("Server started on port 5000");
    });
  })
  .catch((err) => console.error("Error connecting to database:", err));


