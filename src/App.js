import logo from './logo.svg';
import { CircularProgress, CssBaseline } from '@mui/material';

import './App.css';
import './headers/Title';
import Title from './headers/Title';
import Header from './headers/Header';
import Body from './content/Body';
import Footer from './footing/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [page, setPage] = useState("Home");

  return(
    <div className = "App">
        <Header setPage = {setPage}/>
        <Body page = {page}/>
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

//https://stackoverflow.com/questions/55726886/react-hook-send-data-from-child-to-parent-component  - sending params child<->parent
//https://progressivewebninja.com/how-to-pass-multiple-values-in-react-context/ - possible solution for multiple params using context