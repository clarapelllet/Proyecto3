import React from "react";
import {Link} from "react-router-dom";
function Navbar(){
    return(
        <header>
        <nav className="barra"> 

            <ul>
                <li><img className="logo" src="./img/nuevoLogo.png" alt="logo"/></li>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/favoritos">FAVORITOS</Link></li>
                <li><Link to="/generos">GÉNEROS</Link></li>
                <li><form method="get" action="./resultados.html" >
                    <input type="search" name="buscador" placeholder="Buscar"/>
                    <input type="submit" value="Buscar"/></form> </li>
       </ul></nav>
    </header>
    )
}

export default Navbar