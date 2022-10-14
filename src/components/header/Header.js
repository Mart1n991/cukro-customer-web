import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navbarWidth } from "../../constans/navbarWidth";

const Header = ({ handleDrawerToggle }) => (
  <AppBar
    position="fixed"
    sx={{
      width: { sm: `calc(100% - ${navbarWidth}px)` },
      ml: { sm: `${navbarWidth}px` },
    }}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        CUKRO
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
