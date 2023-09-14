import React, { Component } from 'react';
import Tarjetas from "../Tarjetas/Tarjetas";
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
    filtrarPelicula(textoAFiltrar){
        //  Desarrollar el método para que deje solo los personajes en donde el texto a filtrar esté incluido en el nombre.
            let peliculasFiltradas = this.state.peliculaspop.filter(function(pelifiltrada){
                return pelifiltrada.name.includes(textoAFiltrar) //includes retorna TRUE o FALSE
            })
    
            this.setState({
                peliculaspop: peliculasFiltradas,
            })
    
        }
    
        traerMas(){
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=781faef6942a31915ed87b416fbba64ba&page=`+this.state.page)
                .then( res => res.json())
                .then(data=> this.setState({
                    populares: this.state.peliculaspop.concat(data.results),
                    page: this.state.page+1
                }))
                .catch()
        }

    // render(){
    //     {
    //         console.log(this.setState.peliculaspop)
    //         return(
    //             <React.Fragment>
    //             <section>
    //                 <filtro filtrar={(texto) => this.filtrarPelicula(texto)} />

    //                 this.state.peliculaspop.length > 0 ?
    //                 <h2>Peliculas populares</h2>
    //                 { 
    //                    this.state.peliculaspop.map(
    //                     (pelicula,i) => <Tarjetas key= {pelicula + i} datosPelicula={pelicula}/>
    //                    )
    //                 }
    //             </section>
    //             <button onClick={() => this.traerMas(this.state.peliculaspop)} ><i class="fa-solid fa-ticket"></i>Traer Más</button>
    //             </React.Fragment>
                
    //         )
    //     }
    render(){
        return(
        <React.Fragment>
            <filtro filtrar={(texto) => this.filtrarPelicula(texto)} />
            
            <section>
                
            <h2>Peliculas populares</h2>
            
                <div className="galeria">
                    {this.state.peliculaspop.map(
                        (pelicula,i) => <Tarjetas key= {pelicula + i} datosPelicula={pelicula}/>
                       )}
                </div>
                
            </section>
            

            <button onClick={() => this.traerMas(this.state.peliculaspop)} className="boton tmas"><i class="fa-solid fa-ticket"></i>Traer Más</button>


        </React.Fragment>
        )
    }
    
}
    


export default Populares
