import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Dropdown = params => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const [currentSite, setCurrentSite] = useState("Home");
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};

  const handleClose = (e, value) => {
    console.log("Val: " + value);
    console.log("Event: " + Object.toString(e));
    setCurrentSite(value);
    setAnchorEl(null);

    console.log("Dropdown::handleClick ---> Sending changed dropdown value: " + value);
    params.setPage(value);
  };
  //TODO: onclick redirect(possibly in effect)

   useEffect(() => {
     console.log("Use effect ran: " + currentSite);
   }, [currentSite]);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        size = "large"
        value = "Home"
        sx = {{width: "10rem"}}
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
        <MenuItem key={1} value = "Home" onClick={e => handleClose(e, "Home")}>Home</MenuItem>
        <MenuItem key={2} value = "Favourites" onClick={e => handleClose(e, "Favourites")}>Favourites</MenuItem>
      </Menu>
    </div>
  );
};

export default Dropdown;