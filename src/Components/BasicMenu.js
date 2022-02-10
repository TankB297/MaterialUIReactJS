import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ImageAvatars from "./ImageAvatars";
import Stack from "@mui/material/Stack";
import "../Styles/BasicMenu.css";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menu-header">
      <Stack className="menu-header-nav" direction="row" spacing={1}>
        <ImageAvatars />
        <p>
            TankB
        </p>
        <Stack className="menu-header-function" direction="row" spacing={3}>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            How it works
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <Button id="basic-button">Help</Button>
          <Button id="basic-button">Login</Button>
          <Button id="basic-button" variant="contained">
            Sign Up
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}
