import React, {Component} from "react";

class addToDo extends Component {
  constructor() {
    super();
    this.state= {input:""}
  }

  handleInputChange(event) {
    this.setState({input:event.target.value});
  }

  render() {
    console.log(this.props);
    return (

      <div className="add-to-do">

      <input
      onChange={(event) => this.handleInputChange(event) }
      type="text"
      value={this.state.input}
      />

      <button> "Add To Do" </button>
      </div>

    );
  }
}
