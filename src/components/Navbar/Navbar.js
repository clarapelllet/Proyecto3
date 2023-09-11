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
        // this.props.navigation.navigate("/searchResults/"+this.state.textoDelInput)
        return true
    }

    guardarDatosDelInput(eventoEnElInput){
        this.setState({
            textoDelInput: eventoEnElInput.target.value
        })

       // console.log(this.state.textoDelInput);

        return true
    }
render(){
    return(
        <header>
        <nav className="barra"> 
            <ul>
                <li><img className="logo" src="/img/nuevoLogo.png" alt="logo"/></li>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/favoritos">FAVORITOS</Link></li>
                <li><Link to="/valoradas">VALORADAS</Link></li>
                <li><Link to="/valoradas">POPULARES</Link></li>
                <li><Link to="/generos">GÉNEROS</Link></li>
                <li><form action="" method='GET' onSubmit={()=>this.controlarEnvio()} >
                    <label htmlFor="">Texto a filtrar: </label>
                    <input type="text" onChange={(e)=>this.guardarDatosDelInput(e)} value={this.state.textoDelInput} />
                    <button  type='submit'>Filtrar</button>
                </form></li>
       </ul></nav>
    </header>
    )
}
}

export default Navbar

