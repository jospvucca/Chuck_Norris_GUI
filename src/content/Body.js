import { Card, Container, ThemeProvider, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import SingleContainer from "./single/SingleContainer";

const Body = params => {

  //  ----  ----  LOGIC ----  ----  //
  const [loading, setLoading] = useState(false);
  const [jokes, setJokes] = useState([]);
//   const [liked, setLiked] = useState(() => {
//     return getStorageValue();
//   });    -- todo

  const Spinner = () => {
    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <CircularProgress size = {80}/>
        </div>
     );
  };

//   function Like(key, value) {
//     useEffect(() => {
//       localStorage.setItem(key, JSON.stringify(value));
//     }, [key, value]);
//   }

//   function getStorageValue() {
//     const saved = localStorage.getItem("oo");
//     const initial = JSON.parse(saved);
//     return initial;
//   }

  function getRandom() {
    return axios
      .get("https://api.chucknorris.io/jokes/random")
      .then(res => {
        console.log("Axios::/random::Returned ---> " + JSON.stringify(res));
        setJokes(res);
        setLoading(false);
      })
      .catch(err => console.error(":( Axios error ---> " + err));
  }
  
  useEffect(() => {
    setLoading(true);
    getRandom();
 }, []);
  ////////////////////////////////////

    return(
        <React.Fragment>
            <main style={{paddingBottom: "1rem"
                , minHeight: "100vh"
                , background: "white"
                , position: "relative"
                , zIndex: 1
                , padding: "2rem"
                , display: "flex"
                , flexDirection: "column"
                , alignContent: "center"
                , justifyContent: "center"
                , alignItems: "center"}}>
                <Typography className = "functionality-description"
                    variant = "h6" 
                    align="center" 
                    paddingTop = {{paddingTop: "1rem"}}
                    color={{color: "grey"}}
                    paragraph 
                    sx = {{position: "absolute", top: 0}}>
                    Would you kindly try out our jokes API?
                </Typography>

                {   loading === true ? <Spinner /> :
                    <Container sx = {{paddingBlockEnd: "10rem", paddingTop: "2rem", width: "auto"}}>
                        {params.page === "Home" ? <SingleContainer jokes = {jokes}/> : <CardContainer liked = {null}/>}
                    </Container>
                }
            </main>
        </React.Fragment>
    );
}

export default Body;