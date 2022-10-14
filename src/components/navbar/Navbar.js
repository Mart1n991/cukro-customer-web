import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { alpha, styled } from "@mui/material/styles";

const Navbar = ({ theme }) => (
  <>
    <Toolbar />
    <List>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: "#e3f2fd" }}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText
              primary={text}
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

export default Navbar;
