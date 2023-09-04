import React from "react";
import {Link} from "react-router-dom";
function Navbar(){
    return(
        <header>
        <nav className="barra"> 

            <ul>
                <li><img className="logo" src="./img/nuevoLogo.png" alt="logo"/></li>
                <li><Link to="./index.html">HOME</Link></li>
                <li><Link to="./favorite.html">FAVORITOS</Link></li>
                <li><Link to="./genres.html">GÉNEROS</Link></li>
                <li><form method="get" action="./resultados.html" >
                    <input type="search" name="buscador" placeholder="Buscar"/>
                    <input type="submit" value="Buscar"/></form> </li>
       </ul></nav>
    </header>
    )
}

export default Navbar