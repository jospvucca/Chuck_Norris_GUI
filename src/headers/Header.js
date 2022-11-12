import React from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import Dropdown from "./Dropdown";

const Header = () => {
    return (
        <React.Fragment>
            <AppBar sx={{background: "orange"}} position = "sticky">    {/*or relative*/}
                <Toolbar margin = "auto" style={{display: "inline-flex", flexDirection: "row", alignContent: "space-between", justifyContent: "space-around", alignItems: "center"}}>
                    {/* <Button startIcon = {<MenuOpenIcon fontSize = "large" />} size = "large" /> */}
                    <Dropdown />
                    <Typography variant = "h3" alignSelf={{alignSelf: "center"}}>Chuck Norris GUI</Typography>
                    <div style={{paddingLeft: "10rem"}}/>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;