import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../Containers/style.css'
import { List, ListItem } from "../List/index";
import moment from "moment"


const Transactions = () => {

  const [childrenArray, setChildrenArray] = useState([])
  const [transactionsArray, setTransactionsArray] = useState([])
  const [choresArray, setChoresArray] = useState([])
  //Global Variables for Balance Calculation
  let newBalance
  let transactions = []
  let chores = []
  let sumOfChores
  let sumOfTransactions


  useEffect(() => {
    loadChildren()
    loadTransactions()
    loadChores()
  }, [])


  // Loads all chores
  function loadChores() {
    axios.get("/api/chores/")
      .then(res => {
        var doneChores = []
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].date_completed !== null) {
            doneChores.push(res.data[i]);
          }
        }
        setChoresArray(doneChores)
      }

      )
      .catch(err => console.log(err));
  };


  // Loads all children
  function loadChildren() {
    axios.get("/api/children/")
      .then(res =>
        setChildrenArray(res.data),
      )
      .catch(err => console.log(err));
  };


  // Loads all transactions
  function loadTransactions() {
    axios.get("/api/transaction/")
      .then(res =>
        setTransactionsArray(res.data),
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
        if (res.data[i].date_completed !== null) {
        chores.push(parseInt(res.data[i].amount))}
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
    <div className="childContainer" >
      {/* NavBar ToDo: Make this a component */}
      <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
        <a className="navbar-brand" href="/child" style={{ color: "white" }}>
          <img id="childFooterLogo" src="images/logo.png" width="100px" className="d-inline-block align-top" alt="Logo"></img></a>
        <a href="/"><button className="btn btn-success">Log Out</button></a>
      </nav>

      <div >

        {/* Loops through all children in db and creates cards for each */}
        {childrenArray.length ? (
          <div className="children-cards">
            {childrenArray.map(children => {
              return (
                <div>
                  <br />
                  <br />
                  <b><h3>{children.child_name}</h3></b>
                  <h4><i>Current Balance:</i> ${children.balance}.00</h4>
                </div>
              )
            })}
          </div>
        ) : (<></>
          )
        }

        <div class="col-md-8 offset-md-2">
          {/* Goes through Chores Array and lists out each chore. Chore name and amount are displayed and a delete button is created for each chore */}
          {choresArray.length ? (
            <List style={{fontColor:"green"} + '!important'}>
              {choresArray.map(chore => {
                return (
                  <ListItem key={chore.chores_id}>
                    <h6>
                      + <i> ${chore.amount}.00 </i> Deposit for Completed Chore: <b> {chore.chore_name} </b> on {moment(chore.date_completed).format('L')} 
                    </h6>
                  </ListItem>

                );
              })}
            </List>
          ) : (<></>
              // This will render when there are no chores to be displayed
            )}



          {/* Goes through Transactions Array and lists out each transaction. Transaction name and amount are displayed and a delete button is created for each transaction */}
          {transactionsArray.length ? (
            <List style={{fontColor: "red"} + '!important'}>
              {transactionsArray.map(transaction => {
                return (
                  <ListItem key={transaction.transaction_id}>

                    <h6>
                    - <i> ${transaction.amount}.00 </i> Withdrawl For: <b>{transaction.admin_comments} </b> on {moment(transaction.date).format('L')}
                    </h6>
                  </ListItem>
                );
              })}
            </List>
          ) : (<></>
              // This will render when there are no transactions to be displayed
            )}

        </div>

      </div>
      <br />
      <br />
      <br />
      {/* Footer ToDo: Make this into Component */}
      <nav className="footer parentFooter" style={{ backgroundColor: "white" }}>
        <a className="navbar-brand" href="/parent"> <div className="footer-copyright text-gray font-small" style={{ "font-size": 15 + "px" }}> © 2020 Copyright: Nuggets</div>
        </a>
      </nav>
    </div>
  )
}

export default Transactions