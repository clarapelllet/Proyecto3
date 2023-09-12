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
            <h2 class="tituloDetail"> {this.props.peliculadet.title} </h2>
            <p class="descrip"> {this.props.peliculadet.overview}</p>
            <p class="descrip" id="estreno"> {this.props.peliculadet.release_date}</p>
            <p class="rating"> {this.props.peliculadet.vote_average} </p>
            {/* <p class="duracion"></p>
            <p class="descrip" id="genero"></p> */}
            <button class="añadirFav">Añadir a Favoritos</button>  
         </article> 
        // <p>Hola </p>
        )
    }
}
export default Tarjetadet