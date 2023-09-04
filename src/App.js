import React from "react";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {Switch,Route} from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <h1>My App in Reactt</h1>
      <main>
    <Switch>
       <Route path="/" component={Home} />
        {/* <Route path="/favoritos" component={Favoritos} />
        <Route path="/generos" component={Generos} /> */}
    </Switch>
    </main>
    <Home/>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
