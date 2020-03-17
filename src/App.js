import React, { Component } from 'react';
import CardList from "./components/card-list/CardList"

class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters: []
    }
  }

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(users => this.setState({ monsters: users }))
  }

  render(){
    return (
      <div className="App">
        <input />  
        <CardList monsters={this.state.monsters}/>
          
      </div>
    );
  }
}

export default App;
