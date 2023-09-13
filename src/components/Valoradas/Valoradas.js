import React, {Component} from "react";
import Filtro from "../Filtro/Filtro";
import Tarjetas from "../Tarjetas/Tarjetas";

class Valoradas extends Component{
    constructor(props){
        super(props);
        this.state = {
            peliculastr : [],
        }
    }
 componentDidMount ()
 {
    //buscamos datos
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1`)
 .then(response => response.json())
 .then(data => this.setState({
     peliculastr: data.results
 }))
 .catch()
  
 }

 filtrarPelicula(textoAFiltrar) {
    if (!this.state.peliculastr) {
      return; // Evita filtrar si los datos aún no se han cargado
    }

    const peliculasFiltradas = this.state.peliculastr.filter(function(peliFiltrada){
      return peliFiltrada.title.includes(textoAFiltrar);
    });

    this.setState({
      peliculastr: peliculasFiltradas,
    });
  }

    render()
    {
        console.log(this.setState.peliculastr)
        return(
            <React.Fragment>
                
            <section>
            <Filtro filtrar={(texto) => this.filtrarPelicula(texto)} />
                <h2>Peliculas Top Rated</h2>
                { 
                   this.state.peliculastr.map(
                    (pelicula,i) => <Tarjetas key= {pelicula + i} datosPelicula={pelicula}/>
                   )
                }
            </section>
            </React.Fragment>
            
        )
    }
}

export default Valoradas
