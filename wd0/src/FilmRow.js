import React from 'react'

const FilmRow = (props) => {
    return (
<div className="film-row">
  <img src={'https://image.tmdb.org/t/p/w500/'+props.poster} alt="" />

  <div className="film-summary">
    <h1 >{props.title}</h1>
    <p>{props.date}</p>
  </div>
</div>
    )
}

export default FilmRow