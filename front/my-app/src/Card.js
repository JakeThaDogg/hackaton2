import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {


  render () {
    return (
      <div className='card'>
        <h1> Maybe it's your soulmate ... </h1>
        <img src={this.props.img} alt={this.props.name} />
        <h3>{this.props.name}, {this.props.species} ({this.props.gender})</h3>
        <a href={this.props.wiki}><button>Tell me more !</button></a>
      </div>
    )
  }
}
