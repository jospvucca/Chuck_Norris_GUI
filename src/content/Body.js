import { Card, Container, Typography } from "@mui/material";
import React from "react";
import CardContainer from "./CardContainer";
import SingleContainer from "./single/SingleContainer";

const Body = () => {
    return(
        <React.Fragment>
            <main style={{paddingBottom: "1rem"
                , minHeight: "100vh"
                , background: "white"
                , position: "relative"
                , zIndex: 1
                , padding: "2rem"}}>
                <Typography className = "functionality-description" variant = "h6" align="center" paddingTop={{paddingTop: "1rem"}} color={{color: "grey"}} paragraph>
                    Would you kindly try out our jokes API?
                </Typography>
                <Container maxWidth = "sm">
                    {/* <CardContainer /> This is prob a favourites list, should be able to switch between*/}
                    <SingleContainer />
                </Container>
            </main>
        </React.Fragment>
    );
}

export default Body;