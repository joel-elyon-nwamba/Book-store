import { useState } from "react";
import { AppBar, Toolbar, Typography, Tab, Tabs,  } from "@mui/material";
import { NavLink } from "react-router-dom";

function Header() {
  const [value, setValue] = useState();
  return(
    <div>
      <AppBar sx={{backgroundColor: "#232F3D"}} position = "sticky">
        <Toolbar>
        <Typography>Joels Book Store</Typography>
        <Tabs sx={{ml: "auto"}} textColor="inherit" indicatorColor="secondary" value={value} onChange={(e, val) => setValue(val)}>
          <Tab LinkComponent={NavLink} to= "/add" label = "Product Add"/>
          <Tab LinkComponent = {NavLink} to= "/books" label = "Books"/>
          <Tab LinkComponent={NavLink} to="/about" label = "Product Add"/>
        </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;