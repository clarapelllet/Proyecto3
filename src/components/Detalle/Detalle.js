
import React, { Component } from 'react';
// import {Link} from "react-router-dom";
import Tarjetas from "../Tarjetas/Tarjetas";
import Home from "../Home/Home";

class Detalle extends Component{
    constructor(){
        super();
        this.state = {
           peliculaspop : [],
           peliculastr : []
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${datosPelicula.id}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`)
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

    render(){
        console.log(this.setState.peliculaspop)
        console.log(this.setState.peliculastr)
        return(
            <React.Fragment>
            <article class="infoDetail">
            <h2 class="tituloDetail"></h2>
            <p class="descrip"></p>
            <p class="descrip" id="estreno"></p>
            <p class="rating"></p>
            <p class="duracion"></p>
            <p class="descrip" id="genero"></p>
            {/* <button class="añadirFav">Añadir a Favoritos</button> */}
            </article>
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
                    (pelicula,i) => <Tarjetas key= {pelicula + i} datosPelicula={pelicula}/>
                   )
                }
            </section>
            </React.Fragment>
            
        )
    }

// render(){
//     console.log(this.props);
//     return(
//         <article className='cajas'>
//             <img class="pelis" src= {"https://image.tmdb.org/t/p/w500${this.props.datosPelicula.poster_path}"} alt="" />
//             <div className="cajas">
//                 <p className="titulo">  {this.props.datosPelicula.title} </p>
//                 <p className="estreno">  {this.props.datosPelicula.release_date} </p>
//                 <p className="estreno">  {this.props.datosPelicula.overview} </p>
//                 <p className="estreno">  {this.props.datosPelicula.vote_average} </p>
//                 <p className="estreno">  {this.props.datosPelicula.genre} </p>

//             </div>
//         </article>
//     )
// }
}

export default Detalle
