import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useTheme } from "@mui/material";
import { navLinks } from "../../constans/navLinks";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const theme = useTheme();

  const activeStyle = {
    backgroundColor: theme.palette.primary.main,
  };

  return (
    <>
      <Toolbar>{/* <img src={logo} alt="cukro" width="25%" /> */}</Toolbar>
      <List>
        {navLinks.map(({ id, name, path, icon, end }) => (
          <ListItem
            key={id}
            disablePadding
            component={NavLink}
            to={path}
            end={end}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <ListItemButton>
              <ListItemIcon sx={{ color: "#e3f2fd" }}>{icon}</ListItemIcon>
              <ListItemText
                primary={name}
                sx={{
                  color: "#e3f2fd",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Navbar;
