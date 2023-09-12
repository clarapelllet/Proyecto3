import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Buscador.css'

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorInput: ''
    };
  }

  prevenirRefresh(evento) {
    evento.preventDefault();
    // Usamos this.props.history.push para navegar a la página de resultados
    this.props.history.push(`/searchResults/${this.state.valorInput}`);
  }

  actualizarEstadoInput(eventoInput) {
    this.setState({
      valorInput: eventoInput.target.value
    });
  }

  render() {
    return (
      <div className='formularioBusqueda'>
        <form action=""  className='busqueda' method='GET' onSubmit={(e) => this.prevenirRefresh(e)}>
        <input
            className='search'
            type='text'
            name='Search'
            placeholder='¿Qué estás buscando?'
            onChange={(e) => this.actualizarEstadoInput(e)}
            value={this.state.valorInput}
          />
        <button className='botonBusqueda' type='submit'>Search</button>
        </form>
      </div>


    );
  }
}

export default withRouter(Buscador);