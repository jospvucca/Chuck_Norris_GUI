import React, { useEffect } from "react";
import { AppBar, Button, CssBaseline, IconButton, ThemeProvider, Toolbar, Typography } from "@mui/material";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import Dropdown from "./Dropdown";
import theme from "../styling/theme";

const Header = params => {


    console.log("Header::params.setPage: " + params.setPage);

    useEffect(() => {
        console.log("Header::useEffect called. Params should be updated: " + params);
    }, [params]);

    return (
        <React.Fragment>
            <AppBar sx={{background: "orange"}} position = "sticky">    {/*or relative*/}
                <Toolbar margin = "auto" style={{display: "inline-flex", flexDirection: "row", alignContent: "space-between", justifyContent: "space-around", alignItems: "center"}}>
                    {/* <Button startIcon = {<MenuOpenIcon fontSize = "large" />} size = "large" /> */}
                    <Dropdown setPage = {params.setPage}/>
                    <ThemeProvider theme={theme}>
                        {/* <CssBaseline /> */}
                        <Typography variant = "h3" alignSelf={{alignSelf: "center"}}>Chuck Norris GUI</Typography>
                    </ThemeProvider>
                    <div style={{paddingLeft: "10rem"}}/>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;