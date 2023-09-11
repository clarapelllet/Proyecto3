import React, { Component } from 'react';

class Tarjetadet extends Component{
        constructor(props){
            super(props)
            this.state = {
                // textoBoton: "Agregar a favoritos",
            }
        }
render(){
        console.log(this.props);
        return(
            <article class="infoDetail">
            <img className="pelis" src={this.props.datosPelicula.poster_path} alt={this.props.datosPelicula.title} />
            <h2 class="tituloDetail"> {this.props.peliculadet.title} </h2>
            <p class="descrip"> {this.props.peliculadet.overview}</p>
            <p class="descrip" id="estreno"> {this.props.peliculadet.release_date}</p>
            <p class="rating"> {this.props.peliculadet.vote_average} </p>
            <p class="duracion"> {this.props.peliculadet.runtime} </p>

            {/* <p class="duracion"></p>
            <p class="descrip" id="genero"></p> */}
            {/* <button class="añadirFav">Añadir a Favoritos</button>  */}
         </article> 
        )
    }
}
export default Tarjetadet