const Book = require("../model/book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch(err) {
    console.log(err)
  }

  if(!books) {
    return res.status(404).json({ message: "No products found"});
  }
  return res.status(200).json({ books })
}

const addBook = async (req, res, next) => {
  const {name, author, description, price, page, available} = req.body
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      prices,
      pages,
      available

    });
    await book.save()
  } catch(err) {
    console.log(err)
  }
  if(!book) {
    return res.status(500).json({message: "Unable To Add"})
  }
  return res.status(201).json({ book })
}


exports.getAllBooks = getAllBooks;
exports.addBook = addBook;