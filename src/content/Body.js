import { Card, Container, ThemeProvider, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import SingleContainer from "./single/SingleContainer";

const Body = params => {

  //  ----  ----  LOGIC ----  ----  //
  const [loading, setLoading] = useState(false);
  const [jokes, setJokes] = useState(null);
  const [likedJokes, setLikedJokes] = useState([]);

  //  ----  ----  LOCAL STORAGE ----  ----  //
  function getStorageValue() {
    //TODO: this will be in useState(get this function) for likedJokes
  }
  ////////////////////////////////////////////

  const Spinner = () => {
    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <CircularProgress size = {80}/>
        </div>
     );
  };

  function getRandom() {
    return axios
      .get("https://api.chucknorris.io/jokes/random")
      .then(res => {
        console.log("Axios::/random::Returned ---> " + JSON.stringify(res));

        //TODO!!: create an object with all fields( you can see them when you load app). Save data into that object and setJokes as that object, then send the object(already done) to childs into cardEl so its easier to read

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

                {   loading === true && jokes === null ? <Spinner /> :
                    <Container sx = {{paddingBlockEnd: "10rem", paddingTop: "2rem", width: "auto"}}>
                        { params.page === "Home" ? 
                          <SingleContainer jokes = {jokes} likedJokes = {likedJokes}/> :
                          <CardContainer liked = {null} />
                        }
                    </Container>
                }
            </main>
        </React.Fragment>
    );
}

export default Body;