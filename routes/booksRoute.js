const express = require("express");

const router = express.Router();

const BookModels = require("../Models/BookModels");

router.post("/", async (request, response) => {
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
router.get("/", async (request, response) => {
try {
  const books = await BookModels.find({});
  return response.status(200).json({
    count: books.length,
    data: books
  });
} catch(error) {
  console.log(error.message);
  response.status(500).send({ message: error.message });
}
});
// VEDZYkIoXlXzM1x3
// Get one book from the database by id
router.get("/:id", async (request, response) => {
try {

  const { id } = request.params;

  const book = await BookModels.findById(id);

  return response.status(200).json(book);
} catch(error) {
  console.log(error.message);
  response.status(500).send({ message: error.message });
}
});

// Update a book so route to an update
router.put("/:id", async (request, response) => {
try {

  if(
    !request.body.title ||
    !request.body.author ||
    !request.body.publishedYear
  ) {
    return response.status(400).send({
      message: "Send all required fields: title, author, publishedYear"
    });
  }
    const { id } =  request.params;
    const result = await BookModels.findByIdAndUpdate(id, request.body);

    if(!result) {
      return response.status(404).json({ message: "Book not found" });
    }
    return response.status(200).send({ message: "Book updated successfully" });
} catch(error) {
  console.log(error.message);
  response.status(500).send({ message: error.message });
}
});

// Delete a book with mongoose
router.delete("/:id", async (request, response) => {
try {

  const { id } = request.params;

  const result = await BookModels.findByIdAndDelete(id);

  if(!result) {
    return response.status(404).json({ message: "Book not found" });
  }
  return response.status(200).send({ message: "Book deleted successfully"});

} catch(error) {
  console.log(error.message);
  response.status(500).send({ message: error.message });
}
});

module.exports = router;