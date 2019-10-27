import React from 'react'
import FilmRow from './FilmRow'

const FilmListing = (props) => {
    return (
        <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {props.films.map(item=> <FilmRow title={item.title} date={item.release_date} id={item.id} poster={item.poster_path}/>)}

      </div>
    )
}

export default FilmListing