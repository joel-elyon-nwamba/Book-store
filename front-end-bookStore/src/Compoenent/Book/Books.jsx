import axios from "axios";
import { useEffect, useState } from "react";
import Book from "../Book/Book";
import "./Book.css"

const url = "http://localhost:3000/books";

const fetchUrl = async () => {
  return await axios.get(url).then((res) => res.data);
};

function Books() {
  const [books, setBooks] = useState([]); // Initialize with an empty array

  useEffect(() => {
    fetchUrl().then(data => setBooks(data.books))
  }, []);

  console.log(books);

  return (
    <div>
      <ul>
        {books && books.map((book, i) => (
          <li className="book-style" key={i}>
            <Book book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;

