import React, { Component } from 'react'

export default class Input extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: '',
    }
  }

    inputChange= (input) => {
      this.setState ({userInput: input})
    }
  





  render() {
    return (
      <div>
        <input
        className="inputLine"
        onChange={(e) => this.inputChange(e.target.value)}
        />

        <span className="update-text">
          {this.state.userInput}
        </span>
      </div>
    )
  }

}
