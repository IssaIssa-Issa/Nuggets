import React, { Component } from 'react';
import '../../App.css';
import auth0Client from './../Authentication/auth';
import logo from '../../logo.png';

  class Login extends Component {
  signIn = () => {
    auth0Client.signIn();
    this.props.history.replace('/callback');
    }
  signOut = () => {
    auth0Client.signOut();
    this.props.history.replace('/');
    }
  render() {
    return (
      <div className="App" >
        <img src={logo} alt="Site Logo" />

<div style={{fontSize : 30 + "px"}}>
<br />
  Demo:
  <a href="/parent"><button className= "btn btn-primary" style={{fontSize : 30 + "px"}}>Log in as Parent</button></a>
  <a href="/child"><button className= "btn btn-primary" style={{fontSize : 30 + "px"}}>Log in as Child</button></a>
  <br /><br /><br /><br /><br />
</div>

          <header className="App-header">
              {
                  auth0Client.isAuthenticated() &&
                  <div>
                      <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
                      <br />
                      <button className="btn btn-primary" onClick={() => { this.signOut() }}  style={{fontSize : 30 + "px"}} >Sign Out</button>
                  </div>
              }
              {
              !auth0Client.isAuthenticated() &&
                  <div>
                      <label className="mr-2 text-white" style={{fontSize : 30 + "px"}} >Welcome to Nuggets! Please Sign In.</label>
                      <br />
                      <button className="btn btn-primary" onClick={() => { this.signIn() }}  style={{fontSize : 30 + "px"}} >Sign In</button>
                  </div>
              }
          </header>
      </div>
  )
}
}
export default Login