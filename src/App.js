import React, { Component } from 'react';
import './App.css';

import Clock from './Clock';

class App extends Component {

  clickHandler(){
    console.log("clicked")
  }

  linkHandler(e){
    e.preventDefault();
    console.log("link clicked: ")
  }

  // inputChangeHandler(e){
    
  // }

  render() {
    return (
      <div className="App">
        <a href="App.js" onClick={(e) => this.linkHandler(e)}>Link</a>
        <Clock val={10} />
        
      </div>
    );
  }

}

export default App;
