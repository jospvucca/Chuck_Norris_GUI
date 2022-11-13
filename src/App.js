import logo from './logo.svg';
import { CssBaseline } from '@mui/material';

import './App.css';
import './headers/Title';
import Title from './headers/Title';
import Header from './headers/Header';
import Body from './content/Body';
import Footer from './footing/Footer';

const App = () => {

  //  ----  ----  LOGIC ----  ----  //
  // const [loading, setLoading] = useState(false);
  // const [jokes, setJokes] = useState([]);
  // const [liked, setLiked] = useState(() => {
  //   return getStorageValue();
  // });

  // const Spinner = () => {
  //   return (
  //     <div style={{ textAlign: "center", padding: "2rem" }}>
  //       <CircularProgress />
  //     </div>
  //   );
  // };

  // function Like(key, value) {
  //   useEffect(() => {
  //     localStorage.setItem(key, JSON.stringify(value));
  //   }, [key, value]);
  // }

  // function getStorageValue() {
  //   const saved = localStorage.getItem("oo");
  //   const initial = JSON.parse(saved);
  //   return initial;
  // }

  // function getRandom() {
  //   return axios
  //     .get("https://api.chucknorris.io/jokes/random")
  //     .then(res => {
  //       setJokes(res.data);
  //       setLoading(false);
  //     })
  //     .catch(err => console.error(":( Axios error ---> " + err));
  // }
  // useEffect(() => {
  //   setLoading(true);
  //   getRandom();
  // }, []);
  ////////////////////////////////////

  return(
    <div>
        {/* <Title /> */}
        <Header />
        <Body />
        <Footer />
    </div>
  );
}
    
export default App;


//https://bareynol.github.io/mui-theme-creator/
//https://www.youtube.com/watch?v=M3m7qvHF-uc&list=PLUUJFyE9Edfa2F_F5J0SiBKH0A3jee2Zb - ne bas precizno sta mi triba ali ima informacija primjera, bolje traziti muiV5 tutorial
//https://www.youtube.com/watch?v=SUEkAOuQZTQ&t=1s  - advanced themes(only single class)

//https://github.com/hidjou/classsed-chuck-norris-react - excelent example(excelent for hooks, mui v4 :( ))
//https://github.com/leonardomso/chuck-cli  - old, might be useful

//https://mui.com/material-ui/react-click-away-listener/  - when i want to click randomly to close menu