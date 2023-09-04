import React from "react";
import {Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.js";


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <h1>My App in React</h1>
      <main>
    <Switch>
       <Route path="/" component={Home} />
        {/* <Route path="" component={Favoritos} />
        <Route path="" component={Generos} /> */}
    </Switch>
    </main>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
