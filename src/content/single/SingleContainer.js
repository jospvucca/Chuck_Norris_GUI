import React, { useState, useRef, useEffect, createRef } from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { Container } from "@mui/system";
import randomJoke from "../../hooksTesting/fakedata";

import CardEl from "../CardEl";

const SingleContainer = () => {

    const currentJoke = useRef(null);
    const childRef = createRef();

    function getPrevious() {

        //setCard(JSON.stringify(randomJoke));
        currentJoke.current = JSON.stringify(randomJoke);
        console.log("ref: " + currentJoke.current);
        this.childRef.current.updateValues(currentJoke.current);
    }
    
    function getNext() {
    
        return randomJoke;
    }

    useEffect(() => {
        currentJoke.current = randomJoke;
    }, []);

    return(
        <React.Fragment>
            <Stack direction = "row" spacing = {3}>
                <Button onClick={getPrevious}>
                    <ArrowLeft sx = {{fontSize: "10rem"}} color = "primary"/>
                </Button>

                <CardEl />

                <Button onClick={getNext}>
                    <ArrowRight sx = {{fontSize: "10rem"}} color = "primary"/>
                </Button>
            </Stack>
        </React.Fragment>
    );
}

export default SingleContainer;