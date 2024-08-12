import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const pages = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Skills", link: "/skills" },
  { title: "Services", link: "/services" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: "100%" }} role="presentation">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Ameya Thakur
        </Typography>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon sx={{ border: "2px solid black", borderRadius: "20px" }} />
        </IconButton>
      </Box>

      <List>
        {pages.map(({ title, link }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={Link}
              to={link}
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        color: "black",
        backgroundColor: "#f1f1f1",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Ameya
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: "13px" }}>
            {/* Desktop View */}
            <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
              {pages.map(({ title, link }, index) => (
                <Link to={link} key={index} style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      my: 2,
                      color: "black",
                      display: "block",
                      textTransform: "none",
                    }}
                  >
                    {title}
                  </Button>
                </Link>
              ))}
            </Box>

            {/* Mobile View */}
            <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{ sx: { width: "100%" } }}
              >
                {DrawerList}
              </Drawer>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
