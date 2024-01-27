import { Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Compoenent/Header";
import Home from "./Compoenent/Home";
import AddBook from "./Compoenent/AddBook";
import Books from "./Compoenent/Book/Books";
import About from "./Compoenent/Book/About";
function App() {


  return (
     <React.Fragment>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/add" element={<AddBook />} exact />
            <Route path="/books" element={<Books />} exact />
            <Route path="/about" element={<About />} exact />
            {/* <Route path="/books/:id" element={<BookDetaik/>} exact/> */}
          </Routes>
        </main>
     </React.Fragment>
  )
}

export default App
