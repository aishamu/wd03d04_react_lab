import FilmPoster from './FilmPoster'
import Fave from './Fave'
import React, { Component } from 'react'
export default class FilmRow extends Component {

  handleDetailsClick =(film)=>{
    console.log( "Fetching details for"+ film)
    }

 render() {
     return (
       <div className="film-row" onClick={()=> this.handleDetailsClick(' Film')}>
         <FilmPoster filmPoster={this.props.filmPoster}/>
         <div className="film-summary">
           <Fave/>
           <h1>{this.props.filmTitle}</h1>
           <p>{this.props.filmDate}</p>
         </div>
       </div>
   )
 }
}