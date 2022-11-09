import { Card, Container, Typography } from "@mui/material";
import React from "react";
import CardContainer from "./CardContainer";

const Body = () => {
    return(
        <React.Fragment>
            <main>
                <Typography className = "functionality-description" variant = "h6" align="center" paddingTop={{paddingTop: "1rem"}} color={{color: "grey"}} paragraph>
                    Would you kindly try out our jokes API?
                </Typography>
                <Container maxWidth = "sm">
                    <CardContainer />
                </Container>
            </main>
        </React.Fragment>
    );
}

export default Body;