import React from "react";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Detalle from "./components/Detalle/Detalle";
// import Filtro from "./components/Filtro/Filtro";
// import Tarjetas from "./components/Tarjetas/Tarjetas";
import Valoradas from "./components/Populares/Populares"
import Populares from "./components/Valoradas/Valoradas"
import Favoritos from "./components/Favoritos/Favoritos"


import {Switch,Route} from "react-router-dom";
import SearchResults from "./components/SearchResults/SearchResults";
function App() {
  return (
    <React.Fragment>
      <Navbar/>
      {/* <h1>My App in Reactt</h1> */}
      <main>
    <Switch>
       <Route path="/" exact={ true } component={Home} />
       <Route path="/Detalle/:id" component={Detalle} />
       <Route path="/Valoradas" component={Valoradas} />
       <Route path="/Populares" component={Populares} />


       <Route path="/searchResults/:resultado" component={SearchResults}></Route>
        {/* <Route path="/favoritos" component={Favoritos} />
        <Route path="/generos" component={Generos} /> */}
    </Switch>
    </main>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
