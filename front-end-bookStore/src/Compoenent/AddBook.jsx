import { FormLabel, TextField, Box, Button } from "@mui/material";

function AddBook() {
  const [inputs, setInputs]
= useState({
  name: "",
  description: " ",
  price: " ",
  author: " ",
  available: false,
  image: " "
});  
return(
    <form>
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