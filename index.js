const express = require("express");
const mongoose = require("mongoose")
const app = express();
const PORT = 3000;
const cors = require("cors");
const MONGODBURI = "mongodb+srv://joelnwamba:VEDZYkIoXlXzM1x3@book-store-mern.1a5xcxk.mongodb.net/books-collection?retryWrites=true&w=majority"

// const { PORT,  mongoDBURL} = require("./config.js")

// Use cors middleware before defining routes
app.use(cors());

// middleware
app.use(express.json());
const booksRoute = require("./routes/booksRoute");
app.use("/books", booksRoute);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To Book Store");
});

mongoose.connect(MONGODBURI).then(() => {
  console.log(`App connected to database`)
  app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
  });
}).catch((error) => {
  console.log(error);
})
