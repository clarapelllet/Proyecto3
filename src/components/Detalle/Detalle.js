
import React, { Component } from 'react';
// import {Link} from "react-router-dom";

class Detalle extends Component{
    constructor(props){
        super(props)
        this.state = {
            // textoBoton: "Agregar a favoritos",
        }
    }
render(){
    console.log(this.props);
    return(
        <article className='cajas'>
            <img class="pelis" src= {"https://image.tmdb.org/t/p/w500${this.props.datosPelicula.poster_path}"} alt="" />
            <div className="cajas">
                <p className="titulo">  {this.props.datosPelicula.title} </p>
                <p className="estreno">  {this.props.datosPelicula.release_date} </p>
                <p className="estreno">  {this.props.datosPelicula.overview} </p>
                <p className="estreno">  {this.props.datosPelicula.vote_average} </p>
                <p className="estreno">  {this.props.datosPelicula.genre} </p>

            </div>
        </article>
    )
}
}

export default Detalle
