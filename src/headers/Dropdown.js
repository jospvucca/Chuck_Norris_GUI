import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const [currentSite, setCurrentSite] = useState("");
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};
  const handleClose = (e, value) => {
    console.log("Val: " + value);
    console.log("Event: " + Object.toString(e));
    setCurrentSite(value);
    setAnchorEl(null);
  };
  //TODO: onclick redirect(possibly in effect)

//   useEffect(() => {
//     console.log("Use effect ran: " + currentSite);
//   }, [currentSite]);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        size = "large"
        value = "Home"
        onClick={handleClick}
        startIcon = {<MenuOpenIcon />}>
        {currentSite}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        // onClose={handleClose("Home")}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem key={1} value = "Profile" onClick={e => handleClose(e, "Profile")}>Profile</MenuItem>
        <MenuItem key={2} value = "Profile" onClick={handleClose}>My account</MenuItem>
        <MenuItem key={3} value = "Profile" onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}