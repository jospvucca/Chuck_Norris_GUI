import { Card, Container, ThemeProvider, Typography } from "@mui/material";
import React, { useState } from "react";
import CardContainer from "./CardContainer";
import SingleContainer from "./single/SingleContainer";

const Body = params => {

    return(
        <React.Fragment>
            <main style={{paddingBottom: "1rem"
                , minHeight: "100vh"
                , background: "white"
                , position: "relative"
                , zIndex: 1
                , padding: "2rem"
                , display: "flex"
                , flexDirection: "column"
                , alignContent: "center"
                , justifyContent: "center"
                , alignItems: "center"}}>
                <Typography className = "functionality-description"
                    variant = "h6" 
                    align="center" 
                    paddingTop = {{paddingTop: "1rem"}}
                    color={{color: "grey"}}
                    paragraph 
                    sx = {{position: "absolute", top: 0}}>
                    Would you kindly try out our jokes API?
                </Typography>
                <Container sx = {{paddingBlockEnd: "10rem", paddingTop: "2rem", width: "auto"}}>
                    {params.page === "Home" ? <SingleContainer /> : <CardContainer />}
                </Container>
            </main>
        </React.Fragment>
    );
}

export default Body;