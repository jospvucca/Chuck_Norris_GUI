import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CardEl from "./CardEl";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CardContainer = () => {
    return(
        <React.Fragment>
            <Container maxWidth = "lg">
                <Grid container spacing = {4}>
                    {cards.map((card) => (
                        <CardEl card = {card}/>     //TODO: fix warning regarding unique key
                    // <Grid item key = {card} xs = {12} sm = {8} md = {6}>
                    //     <Card size = "lg">
                    //         <CardMedia image = "https://source.unsplash.com/random" title = "imagetitle"/>      {/* image not showing, needs to implement it in theme */}
                    //         <CardContent>
                    //             <Typography gutterBottom variant="h5">Title</Typography>
                    //             <Typography>This is where the joke is displayed</Typography>
                    //         </CardContent>
                    //         <CardActions>
                    //             <Button size = "small" color = "primary">Like</Button>
                    //             <Button size = "small" color = "error">Remove from favourites</Button>
                    //         </CardActions>
                    //     </Card>
                    // </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default CardContainer;