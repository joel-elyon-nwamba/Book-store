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
  return res.status(201).json({books: books})
}

const addBooks = async(req, res, next) => {
  const {name, author, description, price, available, image} = req.body;
  let book;
  try {
      book = new Book({
        name,
        author,
        description,
        price,
        available,
        image
      });
      await book.save();
  }catch(error){
    console.log(error);
  }
  if(!book) {
    return res.status(500).json({message: "Unable to add product"})
  }
  return res.status(201).json({ book })
}

const getById = async(req, res, next) => {
  const id = req.params.id;
  let book;

 try {
  book = await Book.findById(id);
 } catch(error) {
  console.log(error);
 }
 if(!book) {
  return res.status(400).json({message: "No product found"});
 }
 return res.status(201).json({ book });
}


const updatedBook = async(req, res, next) => {
  const id = req.param.id;
  const {name, author, description, price, available, image} = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image
    })
    book = await book.save();

  } catch(error) {
    console.log(error);
  }
  if(!book) {
    return res.status(404).json({message: "unable to update"});
   }
   return res.status(200).json({ book });
}

const deleteBook = async(req,res, next) => {
  const id = req.params.id;
  let book;
  try {
      book = await Book.findByIdAndRemove(id);
  } catch(error) {
    console.log(error);
  }
  if(!book) {
    return res.status(404).json({message: "unable to update"});
   }
   return res.status(200).json({ book });
}

exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.getById = getById;
exports.updatedBook = updatedBook;
exports.deleteBook = deleteBook;