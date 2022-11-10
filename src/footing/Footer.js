import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return(
        <React.Fragment>
            <footer>
                <Typography variant = "h6" align = "center" gutterBottom>Footer</Typography>
                <Typography variant = "subtitle1" align = "center" color = "textSecondary" paragraph>Thank you for using our product</Typography>
            </footer>
        </React.Fragment>
    );
}

export default Footer;