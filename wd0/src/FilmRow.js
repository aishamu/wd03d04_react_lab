import FilmPoster from './FilmPoster'
import Fave from './Fave'
import React, { Component } from 'react'
export default class FilmRow extends Component {

  handleDetailsClick =(film)=>{
    console.log( "Fetching details for"+ film)
    }

 render() {
     return (
<div className="film-row" onClick={() => props.onDetailsClick(props.film)}>         <div className="film-summary">
          
           <Fave onFaveToggle={props.onFaveToggle} isFave={props.isFave}/>
           <h1>{this.props.filmTitle}</h1>
           <p>{this.props.filmDate}</p>
         </div>
       </div>
   )
 }
}