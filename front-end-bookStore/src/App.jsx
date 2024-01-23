import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import CreateBooks from "./Pages/CreateBooks";
import DeleteBook from "./Pages/DeleteBooks";
import EditBook from "./Pages/EditBook";
import ShowBooks from "./Pages/ShowBooks";
import './App.css'

function App() {


  return (

    <Routes>
      <Route path = "/" element= {<Home />}/>
      <Route path = "/books/create" element= {<CreateBooks />}/>
      <Route path = "/books/details/:id" element= {<ShowBooks />}/>
      <Route path = "/books/edit/:id" element= {<EditBook />}/>
      <Route path = "/books/delete/:id" element= { <DeleteBook />}/>
    </Routes>
  )
}

export default App
