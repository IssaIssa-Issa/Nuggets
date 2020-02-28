import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header'
import login from './Components/login'
import ParentContainer from './Components/ParentContainer';
import ChildContainer from './Components/ChildContainer';
import Callback from './callback';
import ManageFundsForm from './Components/ManageFundsForm'
import ManageChoresForm from './Components/ManageChoresForm'
import ManageChildForm from './Components/ManageChildForm'

function App() {

        return (
          <div>
      <Header />
      <Router>
            <div>
              <Route exact path="/" component={login} />
              <Route exact path="/parent" component={ParentContainer} />
              <Route exact path="/child" component={ChildContainer} />
              <Route exact path="/managefundsform" component={ManageFundsForm} />
              <Route exact path="/managechoresform" component={ManageChoresForm} />
              <Route exact path="/managechildform" component={ManageChildForm} />

            </div>
          </Router>
      </div>    );
      }



export default App;
