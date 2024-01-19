const express = require("express");
const mongoose = require("mongoose")
const app = express();
const PORT = 3000;
const BookModels = require("./Models/BookModels");
const MONGODBURI = "mongodb+srv://joelnwamba:VEDZYkIoXlXzM1x3@book-store-mern.1a5xcxk.mongodb.net/books-collection?retryWrites=true&w=majority"

// const { PORT,  mongoDBURL} = require("./config.js")

// middleware
app.use(express.json())

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To MERN Stack Tutorial");
});

app.post("/books", async (request, response) => {
    try {
      if(
        !request.body.title ||
        !request.body.author ||
        !request.body.publishedYear
      ){
        return response.status(400).send({
          message: `Send all required fields: title, author, publishedYear`,
        });
      }

      const newBook = {
        title: request.body.title,
        author: request.body.author,
        publishedYear: request.body.publishedYear
      };

      const book = await BookModels.create(newBook);
      return response.status(201).send(book);
    } catch(error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
})
// Route for get all books from database
app.get("/books", async (request, response) => {
  try {
    const books = await BookModels.find({});
    return response.status(200).json(books);
  } catch(error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
})
// VEDZYkIoXlXzM1x3

mongoose.connect(MONGODBURI).then(() => {
  console.log(`App connected to database`)
  app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
  });
}).catch((error) => {
  console.log(error);
})