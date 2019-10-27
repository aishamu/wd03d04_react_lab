import List from './List';
import Details from './Details';
import './App.css';
import TMDB from './TMDB'
import React, { Component } from 'react'

export default class App extends Component {
 render() {
   return (
     <div className="film-library">
 <List db={TMDB}/>
 <Details />
 </div>
   )
 }
}