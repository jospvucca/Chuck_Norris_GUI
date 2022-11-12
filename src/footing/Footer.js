import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return(
        <React.Fragment>
            <footer style={{marginTop: "auto", borderTop: "0.1rem black solid"}}>
                {/*, position: "fixed", left: 0, right: 0, bottom: 0  ---> This fixes single card footer so its on bottom, but ruins multiple cards that need scrolling, TODO!*/}
                <Typography variant = "h6" align = "center" gutterBottom>Footer</Typography>
                <Typography variant = "subtitle1" align = "center" color = "textSecondary" paragraph>Thank you for using our product</Typography>
            </footer>
        </React.Fragment>
    );
}

export default Footer;