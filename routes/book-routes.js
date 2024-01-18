const express = require("express");
const router = express.Router();
const Book = require("../model/book");
const booksController = require("../controllers/books-controller");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/", )

module.exports = router;
