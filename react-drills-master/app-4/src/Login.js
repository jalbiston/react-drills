import React, { Component } from 'react'

export default class Login extends Component {
constructor(props){
    super(props)
    this.state = {
        username: "",
        password: ""
    }
};

handleUsernameChange =(input) => {
        this.setState({username: input})
};

handlePasswordChange(pass){
    this.setState({password: pass})
}


handleClick =() => {
    alert(`Username:${this.state.username} Password: ${this.state.password}` )
}

    render() {
        return (
            <div>
            <input 
            placeholder = "Username"
            type ="text"
            onChange={(e) => this.handleUsernameChange( e.target.value)}>
            </input>
            <input
            placeholder="Password"
            type="password"
            onChange={(e) => this.handlePasswordChange(e.target.value)}
            ></input>    
            <button  onClick = {() => this.handleClick()}>Zuckerbutton</button>        
            </div>
        )
    }
}
