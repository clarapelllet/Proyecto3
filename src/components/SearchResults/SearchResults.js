import React, { Component } from "react";
import Tarjetas from "../Tarjetas/Tarjetas";
import './SearchResults.css'

class SearchResults extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculaBuscada: [],
        }
    }
    componentDidMount() {
      
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&query=${this.props.match.params.resultado}&page=1`)
          .then(res => res.json())
          .then(data => this.setState({
            peliculaBuscada: data.results,
          }))
          .catch();
      }
    render(){
        return(
            <React.Fragment>
                <h2  className="populares"> Resultados de Busqueda </h2>
                <div>
                    <section>
                        {
                            this.state.peliculaBuscada.slice(0,12).map(
                                (pelicula,i) => <Tarjetas key={pelicula + i} datosPelicula={pelicula}/>
                            )
                        }
                    </section>
                </div>
                
            </React.Fragment>
        )
    }
}

export default SearchResults