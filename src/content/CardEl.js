import React, { forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useState } from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";

const CardEl = forwardRef((props, ref) => {

    console.log("CardEl::props: " + toString(props));
    console.log("CardEl::Card: " + JSON.stringify(ref));
    const [value, setValue] = useState("DEFAULT");
    

    // useLayoutEffect(() => {
    //     updateValues(value);
    // }, [value]);

    function updateValues(newValues) {

        console.log("Updated values: " + newValues);
        setValue(newValues);
    };

    useImperativeHandle(ref, () => {
        if(ref !== null || ref !== undefined) {
            updateValues(ref);
        }
    });

    return(
        <Grid item key = {ref} xs = {12} sm = {8} md = {6}>
            <Card size = "lg">
                <CardMedia image = "https://source.unsplash.com/random" title = "imagetitle"/>      {/* image not showing, needs to implement it in theme */}
                <CardContent>
                    <Typography gutterBottom variant="h5">{value}</Typography>
                    <Typography>This is where the joke is displayed</Typography>
                </CardContent>
                <CardActions>
                    <Button size = "small" color = "primary">Like</Button>
                    <Button size = "small" color = "error">Remove from favourites</Button>
                </CardActions>
            </Card>
        </Grid>
    );
});

export default CardEl;

//this will represent each joke object

//consider using for joke: https://mui.com/material-ui/react-textarea-autosize/