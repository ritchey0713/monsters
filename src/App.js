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

  onInputChange = (input) => {
    this.setState({
      searchTerm: input.target.value
    })
  }

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(users => this.setState({ monsters: users }))
  }

  render(){
    console.log(this.state.searchTerm)
    return (
      <div className="App">
        <input type="text" placeholder="Search Monsters" onChange={this.onInputChange} />  
        <CardList monsters={this.state.monsters}/>
          
      </div>
    );
  }
}

export default App;
