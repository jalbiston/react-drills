import React, { Component } from 'react'

export default class App extends Component {
constructor(props){
  super(props)
  this.state={
    array: ["Pumpkin", " Skeleton", " Sexy Cat"]
  }
}




  render() {
    return (
      <div
      style ={{display: "flex",
    flexDirection: 'column',
    height:    '200px',
    width: ' 200px',
    border: 'solid black'      
    
    }}
      >
        <h2
        style={{color: "Orange"}}>
          {this.state.array.map((index) => <li key={index}
          style={{listStyleType:"none"}}
          >{index} </li>)}
        </h2>
      </div>
    )
  }
}
