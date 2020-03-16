import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "123"
        },
        {
          name: "Dracula",
          id: "122"
        },
        {
          name: "Zombie",
          id: 1555
        }
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {
              this.state.monsters.map(monster =>(
                <h1 key={ monster.id }>{ monster.name }</h1>
              ))
            }
          </div>
        </header>
      </div>
    );
  }
}

export default App;
