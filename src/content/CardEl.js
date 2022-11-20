import React, { forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useState } from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Divider, Grid, Typography } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { Stack } from "@mui/system";

const CardEl = ({jokes, likedJokes}) => {      //params = joke json

    console.log("CardEl::params: " + JSON.stringify(jokes));
    // console.log("CardEl::params::unstringified: " + JSON.parse(toString(jokes)));

    console.log("CardEl::likedJokes: " + likedJokes);

    // const [value, setValue] = useState("DEFAULT");
    const [isLiked, setIsLiked] = useState(false);
    const [cardStorage, setCardStorage] = useState([]);

        //  ----    LOCAL STORAGE   ----    //
        function getStorageValue() {
            const saved = localStorage.getItem("LIKED");
            return JSON.parse(saved);
        };
    
        function StoreLiked(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
            //TODO: set params setLikedJokes - to be displayed in favourites page
        };
    
        function RemoveLiked(key) {
            localStorage.removeItem(key);
        };
        //////////////////////////////////////

    function updateLiked() {
        const val = !isLiked;
        setIsLiked(val);
        //isLiked === true ? StoreLiked(params.jokes.data.id, params.jokes.data) : RemoveLiked(params.jokes.data.id);
    };

    return(
        <div>
        {jokes !== null ? 
        <Grid item key = {1} xs = {12} sm = {8} md = {6}>
            <Card size = "lg" sx = {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "15rem"}}>
                <CardMedia image = "https://source.unsplash.com/random" title = "imagetitle"/>      {/* image not showing, needs to implement it in theme */}
                <CardContent>
                    <Stack direction = "row" spacing={12} divider = {<Divider orientation = "horizontal" />} paddingBottom = {2}>
                        <Typography gutterBottom variant="subtitle1" sx = {{fontSize: 12}}>{JSON.stringify(jokes)}</Typography>
                        {/* <div /> */}
                        {
                            isLiked === false ?
                            <Button size = "lg" sx = {{position: "relative", placeContent: "space-between", justifyContent: "space-between"}}
                                 onClick={() => {updateLiked(); StoreLiked(jokes, jokes);}}>
                                <FavoriteBorder />
                            </Button> 
                            : 
                            <Button size = "lg" sx = {{position: "relative", placeContent: "space-between", justifyContent: "space-between"}}
                                onClick={() => {updateLiked(); RemoveLiked(jokes);}}>
                                <Favorite />
                            </Button>
                        }
                    </Stack>
                    <Typography>{JSON.stringify(jokes)}</Typography>
                </CardContent>
                {/* <CardActions sx={{border: ""}}>
                    <Stack>
                        <Button size = "small" color = "primary">Like</Button>
                        <Button size = "small" color = "error">Remove from favourites</Button>
                    </Stack>
                </CardActions> */}
            </Card>
        </Grid> : <div/>}
        </div>
    );
};

export default CardEl;

//this will represent each joke object

//consider using for joke: https://mui.com/material-ui/react-textarea-autosize/