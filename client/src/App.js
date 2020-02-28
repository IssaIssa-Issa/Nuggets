import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Containers/Header'
import login from './Components/Containers/login'
import ParentContainer from './Components/Containers/ParentContainer';
import ChildContainer from './Components/Containers/ChildContainer';
import Callback from './callback';
import ManageFundsForm from './Components/Forms/ManageFundsForm'
import ManageChoresForm from './Components/Forms/ManageChoresForm'
import ManageChildForm from './Components/Forms/ManageChildForm'

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
