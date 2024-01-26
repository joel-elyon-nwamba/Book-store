const express = require("express");

const router = express.Router();

const Book = require("../Mod../Models/Book");

const booksController = require("../controllers/books-controller");



// Get all of the books
router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBooks);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updatedBook);
router.delete("/:id", booksController.deleteBook);
module.exports = router;