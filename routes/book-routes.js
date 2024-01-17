const express = require("express");
const router = express.Router();
const Book = require("../model/book");


router.get("/", async (req, res, next) => {
let books;
  try {
    books = await Book.find();
  } catch(err) {
    console.log(err)
  }
});
