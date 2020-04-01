import React, { Component } from 'react';
import { CardList } from "./components/card-list/card-list.components";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }

  async componentDidMount() {
    const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();

    this.setState({ monsters: users })
  }

  render() {
    return (
      <div className="App">
        <CardList>
          {
            this.state.monsters.map(monster => {
              return <h1 key={monster.id}>{monster.name}</h1>
            })
          }
        </CardList>
      </div>
    );
  }
}

export default App;
