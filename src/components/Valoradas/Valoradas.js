import react, {component} from "react";
import tarjeta from "../Tarjetas/Tarjetas"
import filtro from "../Filtro/Filtro"

class Valoradas extends component {
    constructor (){
        super()
        this.state = {
            peliculastr: [],
        }
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

 filtrarPelicula(textoAFiltrar)
 {
    //  Desarrollar el método para que deje solo los personajes en donde el texto a filtrar esté incluido en el nombre.
        let peliculasFiltradas = this.state.peliculaspop.filter(function(pelifiltrada){
            return pelifiltrada.name.includes(textoAFiltrar) //includes retorna TRUE o FALSE
        })

        this.setState({
            peliculaspop: peliculasFiltradas,
        })

    }

    render()
    {
        console.log(this.setState.peliculastr)
        return(
            <React.Fragment>
            <section>
                <filtro filtrar={(texto) => this.filtrarPelicula(texto)} />
                <h2>Peliculas Top Rated</h2>
                { 
                   this.state.peliculastr.slice(0,6).map(
                    (pelicula,i) => <Tarjetas key= {pelicula + i} datosPelicula={pelicula}/>
                   )
                }
            </section>
            </React.Fragment>
            
        )
    }


export default Valoradas
