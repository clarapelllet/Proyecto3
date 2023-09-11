import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component{

    constructor(props){
        super(props);
        this.state ={
            textoDelInput: ''
        }
    }

    controlarEnvio(evento){
        evento.preventDefault();
        return true
    }

    guardarDatosDelInput(eventoEnElInput){
        this.setState({
            textoDelInput: eventoEnElInput.target.value
        }, () => this.props.filtrar(this.state.textoDelInput))

       // console.log(this.state.textoDelInput);

        return true
    }
render(){
    return(
        <header>
        <nav className="barra"> 
            <ul>
                <li><img className="logo" src="./img/nuevoLogo.png" alt="logo"/></li>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/Favoritos">FAVORITOS</Link></li>
                <li><Link to="/Valoradas">VALORADAS</Link></li>
                <li><Link to="/Populares">POPULARES</Link></li>
                <li><Link to="/generos">GÉNEROS</Link></li>
                <li><form action="" method='GET' onSubmit={(e) => this.controlarEnvio(e)}>
                    <label htmlFor="">Texto a filtrar: </label>
                    <input type="text" name='filtro' onChange={(e)=>this.guardarDatosDelInput(e)} value={this.state.textoDelInput} />
                    <button type='submit'>Filtrar</button>
                </form></li>
       </ul></nav>
    </header>
    )
}
}

export default Navbar

