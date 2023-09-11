import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Tarjetas extends Component {
    constructor(props){
        super(props)
        this.state = {
            textoBoton: "Agregar a favoritos",
        }
    }
    componentDidMount(){
        //Chequear si el id está en el array de favoritos
        let recuperoStorage = localStorage.getItem('favoritos');

        if (recuperoStorage !== null){
            let favoritos = JSON.parse(recuperoStorage);
    
            //si está el id, cambiar el texto del botón
            if(favoritos.includes(this.props.datosPelicula.id)){
                this.setState({
                    textoBoton: "Quitar de favoritos"
                })
            }

        }
    }
    agergarYSacarDeFavs(id){
        //Guardar un id en un array y luego en localStorage
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');

        if (recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage);
        }

        if(favoritos.includes(id)){
            //Si el id está en el array. ¿Qué tenemos que hacer?
            //Sacarlo del array.
            favoritos = favoritos.filter( unId => unId !== id)

            //Mostrarle un cambio al usuario en la pantalla.
            this.setState({
                textoBoton : "Agregar a favoritos"
            })

        } else {
            //Si el id NO ESTÁ en el array. ¿Qué tenemos que hacer?
            favoritos.push(id);
    
            this.setState({
                textoBoton: "Quitar de favoritos",
            })

        }
        let favoritosToString = JSON.stringify(favoritos);        
        localStorage.setItem('favoritos', favoritosToString);

        console.log(localStorage);

    }

    render(){
        console.log(this.props)
        return(
            <article className='cajas'>
                <img className="pelis" src= {`https://image.tmdb.org/t/p/w500${this.props.datosPelicula.poster_path}`} alt="" />
                <button onClick={()=>this.agergarYSacarDeFavs(this.props.datosPelicula.id)} type='button'>{this.state.textoBoton}</button>
                <div className="cajas">
                    <p className="titulo">  {this.props.datosPelicula.title} </p>
                    <p className="estreno">  {this.props.datosPelicula.release_date} </p>
                    < Link to={`/Detalle/${this.props.datosPelicula.id}`} className="estreno"> Ir a Detalle </Link>
                </div>
            </article>
        )
    }
    
}
export default Tarjetas;