import React from 'react'
import Card from './Card.js'
import db from './database.json'

export default class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
      result: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({search: e.target.value})
    if (e.target.value.length <= 0) {
      this.setState({
        result: []
      })
      return
    }
    let tab = []
    for (let i = 0; i < db.length; i++) {
      if (db[i].name.toLowerCase().includes(e.target.value.toLowerCase())) {
        tab.push(db[i])
      }
    }
    this.setState({
      result: tab
    })
  }

  /*  for(let j = 0; j < tab; j++){
    let res = document.getElementById('result')
    let html = <Card name={tab[i].name} img={tab[i].image} species={tab[i].species} gender={tab[i].gender} wiki={tab[i].wiki}/>
    res += html
  } */

  render () {
    return (
      <div>
        <input onChange={this.handleChange} placeholder='Type here to find your wookie dude' />
        {
          this.state.result.map((perso, index) => {
            return (
              <li>
                <Card key={index} name={perso.name} img={perso.image} species={perso.species} gender={perso.gender} wiki={perso.wiki} />
              </li>
            )
          })
        }
      </div>
    )
  }
}
