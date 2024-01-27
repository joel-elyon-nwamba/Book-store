import { FormLabel, TextField, Box, Button } from "@mui/material";
import { useState  } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const userHistory = useNavigate()
  const [inputs, setInputs]
= useState({
  name: "",
  description: " ",
  price: " ",
  author: " ",
  available: false,
  image: " "
});  

function handleChange(e) {
  setInputs((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value
  }))
  console.log(e.target.name, "Value", e.target.value)
}

async function sendData() {
  await axios.post("http://localhost:3000/books", {
    name: String(inputs.name),
    author: String(inputs.author),
    description: String(inputs.description),
    price: Number(inputs.price),
    image: String(inputs.image)
  }).then(res => res.data);
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(inputs);
  sendData().then(() => userHistory("/books"))
}
return(
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" justifyContent={"center"} maxWidth={700} alignContent={"center"} alignSelf="center" marginLeft={"auto"} marginRight="auto" marginTop={20}>
      <FormLabel>Name</FormLabel>
      <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name"/>
      <FormLabel>Author</FormLabel>
      <TextField value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="author"/>
      <FormLabel>Description</FormLabel>
      <TextField value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="description"/>
      <FormLabel>Price</FormLabel>
      <TextField value={inputs.price} onChange={handleChange} type="number" margin="normal" fullWidth variant="outlined" name="price"/>
      <FormLabel>Image</FormLabel>
      <TextField value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image"/>
      <Button variant="contained" type="submit">Add Book</Button>
      </Box>
    </form>
  )
}

export default AddBook;