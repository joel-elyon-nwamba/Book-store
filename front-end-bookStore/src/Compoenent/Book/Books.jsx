
import axios from "axios";
import { useEffect, useState } from "react";
const url= "http://localhost:3000/books";
const fetchUrl = async() => {
  return await axios.get(url).then((res) => res.data)
}
function Books() {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchUrl().then(data => setBooks(data))
  }, [])
  console.log(books);
  return(
    <div>
      <ul>
        {books && Books.map((book, i) => (
          <div key={i}>
            <Book/>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Books;