import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";

const CardContainer = () => {
    return(
        <React.Fragment>
            <Container maxWidth = "lg">
                <Grid container spacing = {4}>
                    <Grid item>
                        {/* this will be cardel */}
                        <Card>
                            <CardMedia image = "https://source.unsplash.com/random" title = "imagetitle"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5">Hello</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default CardContainer;