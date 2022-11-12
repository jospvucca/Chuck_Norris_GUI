import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { Container } from "@mui/system";
import randomJoke from "../../hooksTesting/fakedata";

import CardEl from "../CardEl";

const SingleContainer = () => {

    const [card, setCard] = useState();

    function getPrevious() {

        setCard(JSON.stringify(randomJoke));
    }
    
    function getNext() {
    
        return randomJoke;
    }

    return(
        <React.Fragment>
            <Stack direction = "row" spacing = {3}>
                <Button onClick={getPrevious}>
                    <ArrowLeft sx = {{fontSize: "10rem"}} color = "primary"/>
                </Button>

                <CardEl ref = {card}/>

                <Button onClick={getNext}>
                    <ArrowRight sx = {{fontSize: "10rem"}} color = "primary"/>
                </Button>
            </Stack>
        </React.Fragment>
    );
}

export default SingleContainer;