import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Header = () => {
    return (
        <React.Fragment>
            <AppBar sx={{background: "orange"}} position = "sticky">    {/*or relative*/}
                <Toolbar margin = "auto" style={{display: "inline-flex", flexDirection: "row", alignContent: "space-between", justifyContent: "space-around", alignItems: "center"}}>
                    <IconButton>
                        <MenuOpenIcon fontSize="large"/>
                    </IconButton>
                    <Typography variant = "h3" alignSelf={{alignSelf: "center"}}>Chuck Norris GUI</Typography>
                    <div/>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;