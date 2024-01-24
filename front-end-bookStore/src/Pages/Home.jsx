import React, { useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../Compoenent/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle} from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3000/books").then((response) => {
      setBooks(response.data.data);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }, []);
  return(
    <div className = "p-4">
      <div className = "text-3xl my-8">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">

        </Link>
      </div>
      Home
    </div>
  )
}


export default Home;