import React from "react";
<<<<<<< HEAD
import {Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.js";


=======
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {Switch,Route} from "react-router-dom";
>>>>>>> 055b1966dcd64a0951276c049825d23845d0c2df
function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <h1>My App in Reactt</h1>
      <main>
    <Switch>
       <Route path="/" component={Home} />
<<<<<<< HEAD
        {/* <Route path="" component={Favoritos} />
        <Route path="" component={Generos} /> */}
=======
        {/* <Route path="/favoritos" component={Favoritos} />
        <Route path="/generos" component={Generos} /> */}
>>>>>>> 055b1966dcd64a0951276c049825d23845d0c2df
    </Switch>
    </main>
    <Home/>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
