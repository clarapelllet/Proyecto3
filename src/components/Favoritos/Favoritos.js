import React, { Component } from 'react';
class Favoritos extends Component{

        constructor(){
            super();
            this.state = {
              
            }
        }

        render(){
            console.log(this.setState.peliculaspop)
            console.log(this.setState.peliculastr)
            return(
                <React.Fragment>
                <section>
                    <h2>Peliculas Populares</h2>
                    { 
                       this.state.peliculaspop.slice(0,6).map(
                        (pelicula,i) => <Tarjetas key= {pelicula + i} datosPelicula={pelicula}/>
                       )
                    }
                </section>
                <section>
                    <filtro filtrar={(texto) => this.filtrarPelicula(texto)} />
                    <h2>Peliculas Top Rated</h2>
                    { 
                       this.state.peliculastr.slice(0,6).map(
                        (pelicula,i) => <Tarjetas key= {pelicula + i} Favoritos={pelicula}/>
                       )
                    }
                </section>
                </React.Fragment>
                
            )
        }
}
export default Favoritos