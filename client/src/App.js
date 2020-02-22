import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Header from './Components/Header'
import NavButtons from './Components/NavButtons';
import Footer from './Components/Footer'
import login from './Components/login'
import ParentContainer from './Components/ParentContainer';
import ChildContainer from './Components/ChildContainer'

function App() {
  return (
    <div>
<Header />
<Router>
      <div>
        <NavButtons />
        <Route exact path="/" component={login} />
        <Route exact path="/parent" component={ParentContainer} />
        <Route path="/child" component={ChildContainer} />
      </div>
    </Router>
<Footer />
</div>    );
}

export default App;
