import './reset.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Movies from './components/Movies'
import Section from './components/Section';
import Seats from './components/Seats';
import Confirmation from './components/Confirmation';
import Error from './components/Error';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
    <Styledheader>
      <p>CINEFLIX</p>
    </Styledheader>
      <Router>
        <Routes>
          <Route element={<Movies/>} path="/" />
          <Route element={<Section/>} path="/sections/:idMovie" />
          <Route element={<Seats/>} path="/seats/:idSection" />
          <Route element={<Confirmation/>} path="/confirmation" />
          <Route element={<Error />} path="*"/>
        </Routes>
      </Router>
    </div>
  );
}
const Styledheader = styled.header`
  background-color: rgba(195, 207, 217, 1);
  height: 67px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    color: rgba(232, 131, 58, 1);
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
  }
;
`


export default App;
