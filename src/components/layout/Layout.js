import { useState } from "react";
import { Box, CssBaseline, Drawer, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { navbarWidth } from "../../constans/navbarWidth";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Box component="nav" sx={{ width: { sm: navbarWidth }, flexShrink: { sm: 0 } }} aria-label="products categories">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: navbarWidth, backgroundColor: "red" },
          }}
        >
          <Navbar theme={theme} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: navbarWidth, bgcolor: theme.palette.primary.light },
          }}
          open
        >
          <Navbar theme={theme} />
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${navbarWidth}px)` } }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
