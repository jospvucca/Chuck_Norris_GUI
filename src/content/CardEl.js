import React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";

function CardEl(card) {
    return(
        <Grid item key = {card} xs = {12} sm = {8} md = {6}>
            <Card size = "lg">
                <CardMedia image = "https://source.unsplash.com/random" title = "imagetitle"/>      {/* image not showing, needs to implement it in theme */}
                <CardContent>
                    <Typography gutterBottom variant="h5">Title</Typography>
                    <Typography>This is where the joke is displayed</Typography>
                </CardContent>
                <CardActions>
                    <Button size = "small" color = "primary">Like</Button>
                    <Button size = "small" color = "error">Remove from favourites</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default CardEl;

//this will represent each joke object

//consider using for joke: https://mui.com/material-ui/react-textarea-autosize/