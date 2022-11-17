import { orange, grey, lightBlue } from "@mui/material/colors";
import { light } from "@mui/material/styles/createPalette";
import { createTheme } from "@mui/system";

const theme = createTheme({
     palette: {
      mode: light,
      
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

     typography: {
       h3: {
         fontWeight: 700,
         fontSize: "2.2rem",
         fontFamily: "Roboto",
         letterSpacing: "0rem",
       },
       
      h6: {
        fontWeight: 500,
        fontSize: "1.25rem",
        fontFamily: "Roboto",
        letterSpacing: "0.025rem",
      },
     }
});

export default theme;

//TODO: try to adjust the theme by this:
/*
const theme = createMuiTheme();
const useStyles = makeStyles((theme) => {
  root: {
    // some CSS that accesses the theme
  }
});

function themeprovider() {
  return Themeprovider theme = {theme}>{}</...
}
export...
*/

//Google for better solutions
//https://mui.com/material-ui/customization/default-theme/