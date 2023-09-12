import React, { Component } from 'react';
import Tarjetas from '../Tarjetas/Tarjetas';
import './Favoritos.css'
class Favoritos extends Component{
    constructor(props){
        super(props);
        this.state = {
           favoritos : [],
        }
    }

componentDidMount(){
    let favs=[];
    let recuperostoragepeliculas= localStorage.getItem("favoritos")
    if(recuperostoragepeliculas!== null){
        let arraypelis= JSON.parse (recuperostoragepeliculas);
        favs= arraypelis
        let peliculas= []

        favs.forEach((id)=> {
         fetch(`https://api.themoviedb.org/3/movie/${id}api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1`)
        .then(response => response.json())
        .then(favs =>{
            peliculas.push(favs);
            this.setState({favoritos:peliculas})
        })
            .catch(error => console.log(error))
        })
        
    }
}
render(){
    console.log(this.state);
    return(
        <React.Fragment>
            <h3> Favoritos </h3>
            <section>
            { 
               this.state.favoritos.map(
                (pelicula,i) => <Tarjetas key= {pelicula + i} datosPelicula={pelicula}/>
               )
            }
        </section>
        </React.Fragment>
    )
}


}

export default Favoritos