import React, { Component } from 'react';
import Tarjetas from "../Tarjetas/Tarjetas";
import Filtro from "../Filtro/Filtro";


class Populares extends Component{
    constructor(props){
        super(props);
        this.state = {
            peliculaspop : [],
            page:1
        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => this.setState({
            peliculaspop: data.results,
            page: this.state.page+1
        }))
        .catch()
    }
    filtrarPelicula(textoAFiltrar) {
        if (!this.state.peliculaspop) {
          return; // Evita filtrar si los datos aún no se han cargado
        }
    
        const peliculasFiltradas = this.state.peliculaspop.filter(function(peliFiltrada){
          return peliFiltrada.title.includes(textoAFiltrar);
        });
    
        this.setState({
            peliculaspop: peliculasFiltradas,
        });
      }
    
        traerMas(){
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=`+this.state.page)
                .then( res => res.json())
                .then(data=> this.setState({
                    peliculaspop: this.state.peliculaspop.concat(data.results),
                    page: this.state.page+1
                }))
                .catch()
        }

    render(){
        {
            console.log(this.setState.peliculaspop)
            return(
                <React.Fragment>
                <section>
                    <Filtro filtrar={(texto) => this.filtrarPelicula(texto)} />

                    <h2>Peliculas populares</h2>
                    { 
                       this.state.peliculaspop.map(
                        (pelicula,i) => <Tarjetas key= {pelicula + i} datosPelicula={pelicula}/>
                       )
                    }
                </section>
                <button onClick={() => this.traerMas(this.state.peliculaspop)} ><i class="fa-solid fa-ticket"></i>Traer Más</button>
                </React.Fragment>
                
            )
        }
    }
    
}
    


export default Populares
