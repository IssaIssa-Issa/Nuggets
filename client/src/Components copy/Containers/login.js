import React, { Component } from 'react';
import '../../App.css';
import auth0Client from '../../auth';
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
          <header className="App-header">
              {
                  auth0Client.isAuthenticated() &&
                  <div>
                      <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
                      <br />
                      <button className="btn btn-dark" onClick={() => { this.signOut() }}>Sign Out</button>
                  </div>
              }
              {
              !auth0Client.isAuthenticated() &&
                  <div>
                      <label className="mr-2 text-white">Welcome! Please Sign In.</label>
                      <br />
                      <button className="btn btn-dark" onClick={() => { this.signIn() }}>Sign In</button>
                  </div>
              }
          </header>
      </div>
  )
}
}
export default Login