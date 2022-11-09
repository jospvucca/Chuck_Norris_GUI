import logo from './logo.svg';
import { CssBaseline } from '@mui/material';

import './App.css';
import './headers/Title';
import Title from './headers/Title';
import Header from './headers/Header';
import Body from './content/Body';

const App = () => {
  return(
    <div>
        {/* <Title /> */}
        <Header />
        <Body />
    </div>
  );
}
    
export default App;


//https://bareynol.github.io/mui-theme-creator/
//https://www.youtube.com/watch?v=M3m7qvHF-uc&list=PLUUJFyE9Edfa2F_F5J0SiBKH0A3jee2Zb - ne bas precizno sta mi triba ali ima informacija primjera, bolje traziti muiV5 tutorial
//https://www.youtube.com/watch?v=SUEkAOuQZTQ&t=1s  - advanced themes(only single class)