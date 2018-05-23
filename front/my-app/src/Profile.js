import React from 'react'
import db from './database.json'

let random = Math.floor(Math.random() * Math.floor(88))
let perso = db[random]

export default class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: perso.name,
      img: perso.image,
      species: perso.species,
      gender: perso.gender,
      homeWorld: perso.homeworld,
      eyeColor: perso.eyeColor,
      height: perso.height,
      masters: perso.masters,
      wiki: perso.wiki
    }
  }
  render () {
    return (
      <div className='profile'>
        <h1> My profile </h1>
        <img src={this.state.img} />
        <h2> {this.state.name}, {this.state.species} ({this.state.gender}) </h2>
        <p> HomeWorld: {this.state.homeWorld} <br /> Eye Color: {this.state.eyeColor} </p>
        <p> Height: {this.state.height} <br /> Masters: {this.state.masters} </p>
      </div>
    )
  }
}
