import React, { useState, useEffect } from 'react'
import KidCard from '../Cards/KidCard'
// import PendingTranList from './PendingTranList'
import ManageFundsBtn from '../Buttons/manageFundsBtn'
import ManageChoresBtn from '../Buttons/manageChoresBtn'
import axios from 'axios'
import '../Containers/style.css'
const ParentContainer = () => {
  const [childrenArray, setChildrenArray] = useState([])



  useEffect(() => {
    loadChildren()
  }, [])



  // Loads all children
  function loadChildren() {
    axios.get("/api/children/")
      .then(res =>
        setChildrenArray(res.data),
      )
      .catch(err => console.log(err));
  };





  return (
      <div className="parentContainer">
      {/* NavBar ToDo: Make this a component */}
      <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
        <a className="navbar-brand" href="/child" style={{ color: "white" }}>
          <img id="childFooterLogo" src="images/logo.png" width="100px" className="d-inline-block align-top" alt="Logo"></img></a>
        <a href="/"><button className="btn btn-success">Log Out</button></a>
      </nav>
      <br></br>
      <br></br>
<div className = "children-cards-div row">
{/* Loops through all children in db and creates cards for each */}
      {childrenArray.length ? (
        <div className="children-cards">
          {childrenArray.map(children => {
            return (
              <KidCard key={children.child_id} 
              name={children.child_name}
              balance={children.balance}/>
                )
            })}
              </div>
            ) : (
              <p>You Don't Have any Children Added Yet!</p>
            )
            }

</div>
          <br></br>
          <div className="row">
<div className="col-md-8 offset-md-2">
              <ManageFundsBtn />
              <ManageChoresBtn />
              </div>
      </div>
          <br></br>
          <br></br>

          {/* <PendingTranList /> */}

         
{/* Footer ToDo: Make this into Component */}
          <nav className="footer parentFooter" style={{ backgroundColor: "white" }}>
        <a className="navbar-brand" href="/parent"> <div className="footer-copyright text-gray font-small" style={{"font-size": 15 + "px"}}> © 2020 Copyright: Nuggets</div>
        </a>
      </nav>
</div>

      )
            
            }
      export default ParentContainer