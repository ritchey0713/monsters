import React, { Component } from 'react';
import CardList from "./components/card-list/CardList"

class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters: [],
      searchTerm: ""
    }
  }

  onInputChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(users => this.setState({ monsters: users }))
  }

  getMonsters = () => {
    const { monsters, searchTerm } = this.state
    return monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }

  render(){
    return (
      <div className="App">
        <input type="text" placeholder="Search Monsters" onChange={this.onInputChange} />  
        <CardList monsters={this.getMonsters()} searchTerm={this.state.searchTerm}/>
      </div>
    );
  }
}

export default App;
