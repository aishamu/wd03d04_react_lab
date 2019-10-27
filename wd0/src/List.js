import FilmRow from './FilmRow'
import React, { Component } from 'react'

export default class List extends Component {
  handleFilterClick =(filter)=>{
    console.log("Setting filter to"+filter)
    }
   render() {
       let allFilms = this.props.db.films.map( (film, index) => (<FilmRow filmTitle={film.title}
           filmId={film.id} filmDate={new Date().getFullYear(film.release_date)} filmPoster={film.poster_path}/>));
       return (
          
           
<div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className={`film-list-filter ${this.filter === 'FAVES' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick(' FAVES')}>


             ALL
            {/* <span className="section-count">{this.props.films.length}</span> */}
        </div>
        <div className={`film-list-filter ${this.filter === 'ALL' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick(' ALL')}>

        <div className="film-list-filter">
            FAVES
            <span className="section-count">0</span>
        </div>
    </div>

    {allFilms}
</div>           
       )
   }
}