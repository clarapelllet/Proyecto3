import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css'
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoDelInput: ''
    };
  }

  controlarEnvio(evento) {
    evento.preventDefault();
    // Usamos this.props.history.push para navegar a la página de resultados
    this.props.history.push(`/searchResults/${this.state.textoDelInput}`);
  }

  guardarDatosDelInput(eventoEnElInput) {
    this.setState({
      textoDelInput: eventoEnElInput.target.value
    });
  }

  render() {
    return (
      <header>
        <nav className="barra">
          <ul>
            <li><img className="logo" src="/img/nuevoLogo.png" alt="logo" /></li>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/Favoritos">FAVORITOS</Link></li>
            <li><Link to="/Valoradas">POPULARES</Link></li>
            <li><Link to="/Populares">VALORADAS</Link></li>
            <li>
              <form action="" method='GET' onSubmit={(e) => this.controlarEnvio(e)}>
                <label htmlFor="">Texto a filtrar: </label>
                <input type="text" onChange={(e) => this.guardarDatosDelInput(e)} value={this.state.textoDelInput} />
                <button type='submit'>Filtrar</button>
              </form>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(Navbar);


