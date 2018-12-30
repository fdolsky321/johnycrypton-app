import React, { Component } from 'react';
import './App.css';

import Titles from "./components/Titles.js";
import Tournaments from "./components/Tournaments.js";

const Username = "fdolsky@gmail.com"
const Password = "cc03e747a6afbbcbf8be7668acfebee5"
const User = "johancrypton"

class App extends Component {
  getTournaments = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`https://www.sharkscope.com/poker-statistics/networks/PokerStars/players/${User}/activeTournaments?Username=${Username}&Password=${Password}`,{method: 'get',headers: new Headers({'Accept': 'application/json'})});
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div className="App">
      <Titles />
      <Tournaments getTournaments={this.getTournaments}/>
      </div>
    );
  }
}

export default App;
