import React, { useState, useEffect, Children } from 'react'
import KidCard from '../Cards/KidCard'
import PendingTranList from '../PendingTranList'
import ManageFundsBtn from '../Buttons/manageFundsBtn'
import ManageChoresBtn from '../Buttons/manageChoresBtn'
import axios from 'axios'

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
      <>
      <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
        <a className="navbar-brand" href="/parent" style={{ color: "white" }}>
          <img src="images/logo.png" width="100px" className="d-inline-block align-top" alt="Logo"></img>
        </a>
        <h3 className="header-title">Parent Dashboard</h3>
      </nav>
      <br></br>
      <br></br>
<div className="container">
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


          <br></br>
          <div className="row">

              <ManageFundsBtn className= "parent-btns"/>
              <ManageChoresBtn className= "parent-btns"/>
            
          

      </div>
          <br></br>
          <br></br>

          <PendingTranList />

          </div>

          <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
            <a className="navbar-brand" href="/parent">
              <img src="/images/logo" width="30" height="30" alt=""></img>
            </a>
          </nav>
</>

      )
            
            }
      export default ParentContainer