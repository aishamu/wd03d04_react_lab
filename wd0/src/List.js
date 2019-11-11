import FilmRow from './FilmRow'
import React, { Component } from 'react'

export default class List extends Component {
  handleFilterClick =(filter)=>{
    console.log("Setting filter to"+filter)
    }
   render() {
     
const faveList=this.props.films.filter((film)=>{ 
    return this.props.faves.includes(film); 
  }) 
  const show=this.state.filter=='all'?this.props.films:faveList; 

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
            <span className="section-count">{this.props.faves.length}</span>
        </div>
    </div>

    {allFilms}
</div>           
       )
   }
}