import React, { Component } from 'react';
import CardList from "./components/card-list/CardList"
import SearchBox from './components/search-box/SearchBox';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      monsters: [],
      searchTerm: "",
      title: ""
    }
    this.props = props
  }

  onInputChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(users => this.setState((prevState, prevProps) => {
      return {
        monsters: users
      }
    }))
  }

  getMonsters = () => {
    const { monsters, searchTerm, title } = this.state
    return monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }

  render(){
    return (
      <div className="App">
        <SearchBox onInputChange={this.onInputChange} placeholder={ "search Monsters" }/>
        <CardList monsters={this.getMonsters()} searchTerm={this.state.searchTerm}/>
      </div>
    );
  }
}

export default App;
