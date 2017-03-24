import React, { Component } from 'react';
import addToDo from "./components/addToDo.js"

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (

      <div className="app">

        <addToDo createTodo= {this.createTodo}>
      </div>

    );
  }
}

export default App;
