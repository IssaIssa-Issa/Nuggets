import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Header from './Components/Header'
import NavButtons from './Components/NavButtons';
import Footer from './Components/Footer'
import Login from './Components/login'
import ParentContainer from './Components/ParentContainer';
import ChildContainer from './Components/ChildContainer';
import Callback from './callback';


function App() {
  return (
    <div>
<Header />
<Router>
      <div>
        <NavButtons />
        <Route exact path="/" component={Login} />
        <Route exact path='/callback' component={Callback} exact />
        <Route exact path="/parent" component={ParentContainer} />
        <Route path="/child" component={ChildContainer} />
      </div>
    </Router>
<Footer />
</div>    );
}

export default App;
