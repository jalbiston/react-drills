import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props){
    super(props)
    this.state= {
        unFilteredArray: [
            "Ham",
            "Cheese",
            "Bread",
            "Lettuce",
            "Tomato"
        ],
        userInput: "",
        filteredArray: []
    }
};

handleChange = (input) => {
  const newArr = this.state.unFilteredArray.filter( (el) =>
         (el.includes(input)) );
    this.setState({ userInput: input, filteredArray: newArr })
};

render() {
    return (
        <div>
            <input
            onChange={ (e) => this.handleChange( e.target.value) }
            />
            <span>
                {this.state.filteredArray.map((index) =>
                 <li key={index}>
                   {index}
                   </li>)}
            </span>
        </div>
      )
  }
}