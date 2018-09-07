import React, { Component } from 'react';
import logo from './logo.svg';
import Form from "./components/Form";
import "./components/Card";
import Card from "./components/Card";
import CardList from "./components/Cards";
import './App.css';

class App extends Component {
  state = {
    cards: [ 
    ]

  }

  addNewCard = (cardInfo) => {
    this.state = {cards : []}
    this.setState(prevState => ({
      
      cards: prevState.cards.concat(cardInfo)
    }))
    
  }
  render() {
    return <div className="App">
        <header className="masthead clear">
          <div className="centered">
            <div className="site-branding">
              <h1 className="site-title" style = {{textAlign :"center"}}>github search</h1>
            </div>
          </div>
      
        </header>
      <div className="site-branding">
        <h2 className="site-title2" style={{ textAlign: "center" }}>Please enter a name</h2>
      </div>
        

        <Form onSubmit={this.addNewCard} />
      <h2 className="site-title2" style={{ textAlign: "center" }}>List of repositories</h2>
      <br />
        <br/>
        <hr/>
        <CardList cards={this.state.cards} />
        
      </div>;
  }
}

export default App;
