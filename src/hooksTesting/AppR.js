import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

import RANDOM_URL from "../env/consts";

//This is for testing purposes of hooks, it should be refactored into existing mui implementation

const Spinner = () => {
    return(
        <div style={{textAlign: "center", padding: "2rem"}}>
            <CircularProgress />
        </div>
    );
}

async function getRandom() {

    //TODO: bad request error
     return axios.get(RANDOM_URL).then(res => {
         console.log("Got random: " + toString(res));
     }).catch((err) => console.error(":( Axios error ---> " + err));

    // const requestOptions = {
    //     method: "GET",
    // };

    // return await fetch(RANDOM_URL, requestOptions).then((res) => {console.log("Res " + toString(res))}).catch((err) => console.error(err));
}

const AppR = () => {
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getRandom();
    }, []);

    return(
        <React.Fragment>
        {loading && <Spinner />}
        </React.Fragment>
    );
}

export default AppR;