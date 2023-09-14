import React, { Component } from 'react';
import './Detalle.css';

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculadet: '',
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          peliculadet: data,
        });
      })
      .catch((e) => console.log(e));
  }

  render() {
    const { peliculadet } = this.state;
    return (
      <div className="detalle-container">
        <div className="detalle-poster">
          <img
            className="pelis"
            src={`https://image.tmdb.org/t/p/w500${peliculadet.poster_path}`}
            alt=""
          />
        </div>
        <div className="detalle-info">
          <h2 className="titulo">Title: {peliculadet.title}</h2>
          <p className="estreno-grande"><span className="titulo-antes-dos-puntos">Release Date:</span> {peliculadet.release_date}</p>
          <p className="estreno-grande"><span className="titulo-antes-dos-puntos">Overview:</span> {peliculadet.overview}</p>
          <p className="estreno-grande"><span className="titulo-antes-dos-puntos">Vote Average:</span> {peliculadet.vote_average}</p>
          <p className="estreno-grande"><span className="titulo-antes-dos-puntos">Duracion:</span> {peliculadet.runtime}</p>
          <p className="estreno-grande"> <span className="titulo-antes-dos-puntos">Genero:</span>{peliculadet.genres === undefined ?[]: peliculadet.genres.map((gen) => gen.name).join(", ")} </p>
            
        </div>
      </div>
    );
  }
}

export default Detalle;



