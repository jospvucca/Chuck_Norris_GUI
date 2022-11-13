// import { Button, CircularProgress } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import RANDOM_URL from "../env/consts";
// import randomJoke from "./fakedata";
// import categories from "./fakecategories";

// //This is for testing purposes of hooks, it should be refactored into existing mui implementation

// const Spinner = () => {
//     return(
//         <div style={{textAlign: "center", padding: "2rem"}}>
//             <CircularProgress />
//         </div>
//     );
// }

// function Like(key, value) {
//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(value));
//     }, [key, value]);
// }

// function getStorageValue() {
//     const saved = localStorage.getItem("oo");
//     const initial = JSON.parse(saved);
//     return initial;
// }

// /*async*/ function getRandom() {

// //dont forget to switch loading to false on end

//     //TODO: axios bad request error
//     //  return axios.get(RANDOM_URL).then(res => {
//     //      console.log("Got random: " + toString(res));
//     //  }).catch((err) => console.error(":( Axios error ---> " + err));

//     // const requestOptions = {
//     //     method: "GET",
//     // };
//     // return await fetch(RANDOM_URL, requestOptions).then((res) => {console.log("Res " + toString(res))}).catch((err) => console.error(err));

//     return randomJoke;
// }

// // export const useLocalStorage = (key, value) => {
// //     const [key, value] = useState(() => {
// //         return getStorageValue(key, value);
// //     }, [key, value]);
// // }

// const AppR = () => {
    
//     const [loading, setLoading] = useState(false);
//     const [jokes, setJokes] = useState([]);
//     const [liked, setLiked] = useState(() => {
//         return getStorageValue();
//     });

//     useEffect(() => {
//         setLoading(true);
//         console.log("Hard coded joke: " + JSON.stringify(randomJoke));
//         setJokes(getRandom());
//     }, []);

//     return(
//         <React.Fragment>
//         {loading && <Spinner />}
//         <div>
//             {JSON.stringify(jokes)}
//             {toString(categories)}
//         </div>
//         <Button onClick={Like("oo", JSON.stringify(jokes))}>Like</Button>
//         </React.Fragment>
//     );
// }

// export default AppR;

import { Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

//This is for testing purposes of hooks, it should be refactored into existing mui implementation

// export const useLocalStorage = (key, value) => {
//     const [key, value] = useState(() => {
//         return getStorageValue(key, value);
//     }, [key, value]);
// }

const AppR = () => {
  const [loading, setLoading] = useState(false);
  const [jokes, setJokes] = useState([]);
  const [liked, setLiked] = useState(() => {
    return getStorageValue();
  });

  const Spinner = () => {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <CircularProgress />
      </div>
    );
  };

  function Like(key, value) {
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  }

  function getStorageValue() {
    const saved = localStorage.getItem("oo");
    const initial = JSON.parse(saved);
    return initial;
  }

  function getRandom() {
    return axios
      .get("https://api.chucknorris.io/jokes/random")
      .then(res => {
        setJokes(res.data);
        setLoading(false);
      })
      .catch(err => console.error(":( Axios error ---> " + err));
  }
  useEffect(() => {
    setLoading(true);
    getRandom();
  }, []);
  //Tranfered until here

  return (
    <React.Fragment>
      {loading && <Spinner />}
      <div>{jokes?.value}</div>
      <Button onClick={Like("oo", JSON.stringify(jokes))}>Like</Button>
    </React.Fragment>
  );
};

export default AppR;