import React, { Component } from "react";
import {Link} from "react-router-dom";
import Tarjetas from "../Tarjetas/Tarjetas";
import './Home.css'
import Buscador from "../Buscador/Buscador";
class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
           peliculaspop : [],
           peliculastr : [],
           view: false,
        }
    }
    
    visibilidad = () => {
        this.setState({view: !this.state.view})
    };

componentDidMount(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => this.setState({
        peliculaspop: data.results
    }))
    .catch()
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => this.setState({
        peliculastr: data.results
    }))
    .catch()
}
filtrarPelicula(textoAFiltrar){
    //  Desarrollar el método para que deje solo los personajes en donde el texto a filtrar esté incluido en el nombre.
        let peliculasFiltradas = this.state.peliculaspop.filter(function(pelifiltrada){
            return pelifiltrada.name.includes(textoAFiltrar) //includes retorna TRUE o FALSE
        })

        this.setState({
            peliculaspop: peliculasFiltradas,
        })

    }

render(){
    console.log(this.setState.peliculaspop)
    console.log(this.setState.peliculastr)
    return(
        <React.Fragment>
            <Buscador/>
            { this.state.peliculaspop.length > 0 ?
        <section className="home-container">
            <h2>Peliculas Populares</h2>
            <h2><Link to='/Valoradas' className='ver-todas-link'>Ver Todas </Link> </h2>
            { 
               this.state.peliculaspop.slice(0,6).map(
                (pelicula,i) => <Tarjetas key= {pelicula + i} datosPelicula={pelicula}/>
               )
            }
        </section>:
        <h3>Loading...</h3>}
        { this.state.peliculastr.length > 0 ?
        <section >
            <filtro filtrar={(texto) => this.filtrarPelicula(texto)} />
            <h2>Peliculas Top Rated</h2>
            <h2><Link to='/Populares' className='ver-todas-link'>Ver Todas </Link> </h2>
            { 
               this.state.peliculastr.slice(0,6).map(
                (pelicula,i) => <Tarjetas key= {pelicula + i} datosPelicula={pelicula}/>
               )
            }
        </section>:
        <h3>Loading...</h3>}
        </React.Fragment>
        
    )
}
}

export default Home