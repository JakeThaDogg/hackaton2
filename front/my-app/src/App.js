import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.js'
import Profile from './Profile.js'
import Search from './Search'
import db from './database.json'

let elem = Math.floor(Math.random() * Math.floor(88))


class App extends Component {
  render() {
    return (
      <div className="App">
        <Card name= {db[elem].name} img= {db[elem].image} species={db[elem].species} gender={db[elem].gender} wiki={db[elem].wiki}/>
        <hr />
        <Profile />
        <hr />
        <Search />
      </div>
    );
  }
}


export default App;
