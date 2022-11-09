import { Search } from "@mui/icons-material";
import { Typography, AppBar, Toolbar, Drawer, Box } from "@mui/material";

const Title = () => {
    return(
        <AppBar color = "primary" position = "relative">
            <Toolbar>
                {/* <Drawer /> */}
                <Box flexGrow = {1}>
                    <Typography variant = "h3" align = "center">Chuck Norris GUI</Typography>
                </Box>
                {/* <Search /> */}
            </Toolbar>
        </AppBar> 
    );
}

export default Title;

// https://www.youtube.com/watch?v=ir_Psf3H8ns&t=2s