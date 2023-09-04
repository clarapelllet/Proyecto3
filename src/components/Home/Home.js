import React from "react";
// import {Link} from "react-router-dom";
function Home(){
    return(
<main>
        <h3 class="categoria">Películas Populares</h3>
       <section class="populares">
        <article class="cajas">
            <a href="./detail-movie.html"></a>
            <p class="titulo">Son Como Niños</p>
            <p class="estreno">Estrenada el 22 de Julio de 2010</p>
        </article>
        <article class="cajas">
            <a href="./detail-movie.html"></a>
            <p class="titulo">Mas Barato Por Docena 2</p>
            <p class="estreno">Estrenada el 21 de Diciembre de 2005</p>
        </article>
       <article class="cajas">
        <a href="./detail-movie.html"></a>
        <p class="titulo">Spiderman</p>
            <p class="estreno">Estrenada el 17 de Diciembre de 2021</p>
       </article>
       <article class="cajas">
        <a href="./detail-movie.html"></a>
        <p class="titulo">Monsters Inc.</p>
            <p class="estreno">Estrenada el 6 de Diciembre de 2001</p>
       </article>
       <article class="cajas">
        <a href="./detail-movie.html"></a>
        <p class="titulo">Titanic</p>
            <p class="estreno">Estrenada el 5 de Febrero de 1998</p>
       </article>
       </section>

       <h3 class="categoria"> Series Populares </h3>
       <section class="populares">
        <article class="cajas">
            <a href="./detail-serie.html"></a>
            <p class="titulo">Gossip Girl</p>
            <p class="estreno">Estrenada el 19 de septiembre de 2007</p>
        </article>
        <article class="cajas">
            <a href="./detail-serie.html"></a>
            <p class="titulo">Suits</p>
            <p class="estreno">Estrenada el 23 de junio de 2011</p>
        </article>
       <article class="cajas">
        <a href="./detail-serie.html"></a>
        <p class="titulo">Grey's Anatomy</p>
            <p class="estreno">Estrenada el 27 de marzo de 2005</p>
       </article>
       <article class="cajas">
        <a href="./detail-serie.html"></a>
        <p class="titulo">La Casa de Papel</p>
            <p class="estreno">Estrenada el 2 de mayo de 2017</p>
       </article>
       <article class="cajas">
        <a href="./detail-serie.html"></a>
        <p class="titulo">Breaking Bad</p>
            <p class="estreno">Estrenada el 20 de enero de 2008</p>
       </article>
       </section>

       <h3 class="categoria">Películas Valoradas</h3>
       <section class="populares">
        <article class="cajas">
            <a href="./detail-movie.html"></a>
            <p class="titulo">La Propuesta</p>
            <p class="estreno">Estrenada el 2 de julio de 2009</p>
        </article>
        <article class="cajas">
            <a href="./detail-movie.html"></a>
            <p class="titulo">Thor</p>
            <p class="estreno">Estrenada el 7 de julio de 2022</p>
        </article>
       <article class="cajas">
            <a href="./detail-movie.html"></a>
            <p class="titulo">Luca</p>
            <p class="estreno">Estrenada el 18 de junio de 2021</p>
       </article>
       <article class="cajas"> 
        <a href="./detail-movie.html"></a>
        <p class="titulo">Corazones Malheridos</p>
            <p class="estreno">Estrenada el 29 de julio de 2022</p>
       </article>
       <article class="cajas">
        <a href="./detail-movie.html"></a>
        <p class="titulo">Relatos Salvajes</p>
            <p class="estreno">Estrenada el 21 de agosto de 2014</p>
       </article>
       </section>
    </main>
    )
}

export default Home