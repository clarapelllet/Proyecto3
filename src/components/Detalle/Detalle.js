
import React, { Component } from 'react';
// import {Link} from "react-router-dom";
// import Home from "../Home/Home";

class Detalle extends Component{
    constructor(props){
        super(props);
        this.state = {
          peliculadet:''
        }
    }

    componentDidMount(){
        let id= this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`)
        .then(response => response.json())
        .then(data => {
             console.log(data);  
                this.setState({
                peliculadet: data
            })
        })
            
        .catch(e=>console.log(e))
    }

render(){
    // console.log(this.props.peliculadet);
    return(
        this.state.peliculadet === '' ? 
        <p>Cargando...</p>
         :
        <article className='cajas'>
            <img class="pelis" src= {`https://image.tmdb.org/t/p/w500${this.state.peliculadet.poster_path}`} alt="" />
            <div className="cajas">
                <p className="titulo">  {this.state.peliculadet.title} </p>
                <p className="estreno">  {this.state.peliculadet.release_date} </p>
                <p className="estreno">  {this.state.peliculadet.overview} </p>
                <p className="estreno">  {this.state.peliculadet.vote_average} </p>
                <p className="estreno">  {this.state.peliculadet.genre} </p>

            </div>
        </article>
    )
}
}

export default Detalle
