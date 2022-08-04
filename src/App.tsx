import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Main from "./components/main/main";
import Error from "./components/error";
import {RecoilRoot} from "recoil";
import Game from "./components/game/game"
import Helmet from "react-helmet";
import {topbar} from "./components/topbar/topbar";

function App() {
  return (
    <div className="App">
     <RecoilRoot>
      <Helmet bodyAttributes={{style: 'background-color : #DDEBE0'}}/>
      {topbar()}
        <Routes>
           <Route path = "/"  element = {<Main />}/>
           <Route path = "/game"  element = {<Game />}/>
           <Route element = {<Error />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
