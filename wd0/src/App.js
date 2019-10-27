import React, { Component } from 'react'
import TMDB from './TMDB'
import Filmlisting from './FilmListing'
import FilmDetails from './FilmDetails'

export default class App extends Component {
  render() {
    return (
<div>
  <Filmlisting films={TMDB.films}>

  </Filmlisting>
  <FilmDetails>

  </FilmDetails>
</div>
    )
  }
}