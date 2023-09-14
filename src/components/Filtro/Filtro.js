// ESTO ES DEL REPO DE ALE!!! HAY QUE ADAPTARLO A NUESTRO FORM, ETC

import React, { Component } from 'react';
import './Filtro.css'
class Filtro extends Component{
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
        return true
    }
    render(){
        console.log(this.props);
        return(
            <div className='lupa'>
            <form action="" className='filtro' method='GET' onSubmit={(e) => this.controlarEnvio(e)}>
                
                <input type="text" name='filtro' placeholder='¿Que queres filtrar?'onChange={(e)=>this.guardarDatosDelInput(e)} value={this.state.textoDelInput} />
                <button type='submit'>Filtrar</button>
            </form>
            </div>
        )
    }
}
export default Filtro