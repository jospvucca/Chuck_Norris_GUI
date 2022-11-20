import React, { useState, useRef, useEffect, createRef } from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { Container } from "@mui/system";
import randomJoke from "../../hooksTesting/fakedata";

import CardEl from "../CardEl";

const SingleContainer = ({jokes, likedJokes}) => {     //params = randomJoke json

    console.log("SingleContainer::jokes: " + JSON.stringify(jokes));
    console.log("SingleContainer::likedJokes: " + likedJokes);

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

    // useEffect(() => {
    //     currentJoke.current = randomJoke;
    // }, []);

    return(
        <React.Fragment>
            <Stack direction = "row" spacing = {3}>
                <Button onClick={getPrevious}>
                    <ArrowLeft sx = {{fontSize: "10rem"}} color = "primary"/>
                </Button>

                <CardEl jokes = {jokes} likedJokes = {likedJokes}/>

                <Button onClick={getNext}>
                    <ArrowRight sx = {{fontSize: "10rem"}} color = "primary"/>
                </Button>
            </Stack>
        </React.Fragment>
    );
}

export default SingleContainer;