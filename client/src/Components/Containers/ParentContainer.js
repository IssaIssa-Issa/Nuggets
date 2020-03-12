import React, { useState, useEffect } from 'react'
import KidCard from '../Cards/KidCard'
import PendingTranList from '../PendingTranList'
import ManageFundsBtn from '../Buttons/manageFundsBtn'
import ManageChoresBtn from '../Buttons/manageChoresBtn'
import axios from 'axios'
import '../Containers/style.css'
const ParentContainer = () => {
  const [childrenArray, setChildrenArray] = useState([])
  //Global Variables for Balance Calculation
let newBalance
let transactions = []
let chores = []
let sumOfChores
let sumOfTransactions



  useEffect(() => {
    loadChildren()
    calculateBalance()
  }, [])



  // Loads all children
  function loadChildren() {
    axios.get("/api/children/")
      .then(res =>
        setChildrenArray(res.data),
      )
      .catch(err => console.log(err));
  };


// Function to Calculate Transactions
  function calculateBalance() {
    //Axios call to get transactions
    axios.get("/api/transaction/")
    .then(res => {
      for (var i = 0; i < res.data.length; i++) {
        transactions.push(parseInt(res.data[i].amount))
    }
      let transactionSum = transactions => transactions.reduce((a,b) => a + b, 0)
      console.log(transactionSum(transactions))
      sumOfTransactions = transactionSum(transactions)  
      //Axios call to get chores
      axios.get("/api/chores/")
      .then(res => {
        for (var i = 0; i < res.data.length; i++) {
          chores.push(parseInt(res.data[i].amount))
        }
        let choresSum = chores => chores.reduce((a,b) => a + b, 0)
        console.log(choresSum(chores))
        sumOfChores = choresSum(chores)

        //calculation
        newBalance = sumOfChores-sumOfTransactions;
        console.log(newBalance)
    
        //Axios call to put balance into database
 
        axios.put(`/api/children/1`, {balance: newBalance}).then(res => {
          console.log('saved successfully')
            }
        ).catch(err => console.log(err));

      } 
    )
    .catch(err => console.log(err));
    })
}


  return (
      <div className="parentContainer">
      <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
        <a className="navbar-brand" href="/parent" style={{ color: "white" }}>
          <img src="images/logo.png" width="100px" className="d-inline-block align-top" alt="Logo"></img>
        </a>
      </nav>
      <br></br>
      <br></br>
<div >
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
<div className="col-md-8 offset-md-2">
              <ManageFundsBtn />
              <ManageChoresBtn />
              </div>
      </div>
          <br></br>
          <br></br>

          <PendingTranList />

          </div>

          <nav className="footer parentFooter" style={{ backgroundColor: "#20638C" }}>
        <a className="navbar-brand" href="/parent"> <div className="footer-copyright text-white font-small"> © 2020 Copyright: Nuggets</div>
          <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img>
        </a>
      </nav>
</div>

      )
            
            }
      export default ParentContainer