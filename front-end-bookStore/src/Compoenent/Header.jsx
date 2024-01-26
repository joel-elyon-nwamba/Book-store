import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return(
    <div>
      <AppBar position = "sticky">
        <Toolbar>
        <Typography>Joels Book Store</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;