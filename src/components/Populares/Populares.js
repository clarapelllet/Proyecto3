import React, { Component } from 'react';

class Populares extends Component{
    constructor(props){
        super(props);
        this.state = {
           peliculastr : [],
        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => this.setState({
            peliculastr: data.results
        }))
        .catch()
    }
    filtrarPelicula(textoAFiltrar){
        //  Desarrollar el método para que deje solo los personajes en donde el texto a filtrar esté incluido en el nombre.
            let peliculasFiltradas = this.state.peliculastr.filter(function(pelifiltrada){
                return pelifiltrada.name.includes(textoAFiltrar) //includes retorna TRUE o FALSE
            })
    
            this.setState({
                peliculastr: peliculasFiltradas,
            })
    
        }
    render(){
        return(
            <React.Fragment>
                <h2>
                    Peliculas populares
                </h2>
                <Filtro filtrar={(texto)=> this.filtrarPelicula(texto)}/>
                { 
               this.state.peliculastr.map(
                (pelicula,i) => <Tarjetas key= {pelicula + i} datosPelicula={pelicula}/>
               )
            }
            </React.Fragment>
        )
    }
    
}

export default Populares
