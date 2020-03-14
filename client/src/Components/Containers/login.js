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

<div>
  For Demo Purposes:
  <a href="/parent"><button className= "btn btn-primary">Log in as Parent</button></a>
  <a href="/child"><button className= "btn btn-primary">Log in as Child</button></a></div>


          <header className="App-header">
              {
                  auth0Client.isAuthenticated() &&
                  <div>
                      <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
                      <br />
                      <button className="btn btn-primary" onClick={() => { this.signOut() }}>Sign Out</button>
                  </div>
              }
              {
              !auth0Client.isAuthenticated() &&
                  <div>
                      <label className="mr-2 text-white">Welcome! Please Sign In.</label>
                      <br />
                      <button className="btn btn-primary" onClick={() => { this.signIn() }}>Sign In</button>
                  </div>
              }
          </header>
      </div>
  )
}
}
export default Login