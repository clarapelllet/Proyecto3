import logo from './logo.svg';
import './App.css';

import React from "react";
import {Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Favoritos from "./components/Favoritos/Favoritos";
import Generos from "./components/Generos/Generos";
import Home from "./components/Home/Home";


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <h1>My App in Reactt</h1>
      <main>
    <Switch>
       <Route path="/" component={Home} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/detalle" component={Detalle} />
        <Route path="/popular" component={Popular} />
        <Route path="/upcoming" component={Upcoming} />
    </Switch>
    </main>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
