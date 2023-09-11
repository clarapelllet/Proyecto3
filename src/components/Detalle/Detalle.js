
import React, { Component } from 'react';
// import {Link} from "react-router-dom";
import Tarjetadet from '../Tarjetadet/Tarjetadet';
// import Home from "../Home/Home";

class Detalle extends Component{
    constructor(props){
        super(props);
        this.state = {
          peliculadet:[],
          id: props.match.params.id
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.id}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`)
        .then(response => response.json())
        .then(data => this.setState({
            peliculadet: data.results
        }))
        .catch()
    }

    render(){
        console.log(this.setState.peliculadet)
        return(
            <React.Fragment>
            <section className='infoDetail'>
                <Tarjetadet peliculadet={this.state.peliculadet} genero={this.state.genero} />
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
