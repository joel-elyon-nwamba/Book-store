const Book = require("../Models/Book");


const getAllBooks = async (req, res, next) => {
  let books;
  try{
    books = await Book.find()
  }catch(error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }

  if(!books) {
    return res.status(404).json({message: "No product found"});
  }
  return res.status(200).json({books: books})
}

exports.getAllBooks = getAllBooks