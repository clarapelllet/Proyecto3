import React from "react";
import {Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.js";
import Favoritos from "./components/Favoritos/Favoritos";
import Generos from "./components/Generos/Generos";
import Home from "./components/Home/Home";

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
        <Route path="/generos" component={Generos} />
    </Switch>
    </main>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
