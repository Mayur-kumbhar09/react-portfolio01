import React, { useState } from "react";
import {
  AppBar,
  Grid,
  Box,
  Typography,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import image from "../images/head-back-thumb.jpg";

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const headStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <>
      <AppBar
        sx={{ background: "inherit", position: "sticky", color: "#000000" }}
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            sx={{width: "100vw"}}
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Grid>
          <Box sx={headStyle}>
            <Typography variant="h2" color="white" sx={{ fontWeight: "550", fontFamily: "Smooch Sans", }}>
              I'am Web Designer...
            </Typography>
          </Box>
      </Grid>
    </>
  );
};

export default Home;
