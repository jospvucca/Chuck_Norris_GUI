import { orange, grey, lightBlue } from "@mui/material/colors";
import { light } from "@mui/material/styles/createPalette";
import { createTheme } from "@mui/system";

const theme = createTheme({
     palette: {
       primary: {
         main: orange[500],
       },

       secondary: {
        main: lightBlue[500],
       },

       background: {
        default: grey[100]
       },
     },
});

export default theme;