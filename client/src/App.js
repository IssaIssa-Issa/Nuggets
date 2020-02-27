import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Header from './Components/Header'

import login from './Components/login'

import ParentContainer from './Components/ParentContainer';
import ChildContainer from './Components/ChildContainer';
import Callback from './callback';


function App() {

        return (
          <div>
      <Header />
      <Router>
            <div>
              <Route exact path="/" component={login} />
              <Route exact path="/parent" component={ParentContainer} />
              <Route path="/child" component={ChildContainer} />
            </div>
          </Router>
      </div>    );
      }



export default App;
