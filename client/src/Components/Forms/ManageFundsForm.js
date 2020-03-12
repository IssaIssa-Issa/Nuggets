import React, { useState, useEffect } from "react";
import axios from 'axios'
import { List, ListItem } from "../List/index";
import DeleteBtn from "../Buttons/DeleteBtn/index";

const ManageFundsForm = () => {
  const [comment, setComment] = useState()
  const [amount, setAmount] = useState()
  const [date, setDate] = useState()
  const [transactionsArray, setTransactionsArray] = useState([])

  useEffect(() => {
    loadTransactions()
    loadTransactions()
  }, [])

  // Loads all transactions
  function loadTransactions() {
    axios.get("/api/transaction/")
      .then(res =>
        setTransactionsArray(res.data),
      )
      .catch(err => console.log(err));
  };

  // Deletes a transaction from the database with a given transaction_id, then reloads transactions
  function deleteTransaction(transaction_id) {
    console.log(transaction_id)
    axios.delete(`/api/transaction/${transaction_id}`).then(response => {
      console.log(response);
      loadTransactions()
    })
  };

  // Add transaction to db based on input fields (transaction name and amount)
  function addTransaction(event) {
    var newTransaction= {
      admin_comments: comment,
      amount: amount,
      date: date,
      admin_id: 1,
      child_id: 1
    };
    axios.post("/api/transaction/", newTransaction).then(
      function () {
        console.log("This is the result", newTransaction)
      })
  }

  return (
    <div className="parentContainer">
    <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
        <a className="navbar-brand" href="/parent" style={{ color: "white" }}>
          <img src="images/logo.png" width="100px" className="d-inline-block align-top" alt="Logo"></img>
        </a>
        <h3 className="header-title">Remove Funds</h3>
      </nav>
      <div className="col-md-8 offset-md-2">
        <br />
        <br />
        <h4>Recent Transactions</h4>


        {/* Goes through Transactions Array and lists out each transaction. Transaction name and amount are displayed and a delete button is created for each transaction */}
        {transactionsArray.length ? (
          <List>
            {transactionsArray.map(transaction => {
              return (
                <ListItem key={transaction.transaction_id}>

                  <strong>
                   {transaction.date} <b> {transaction.admin_comments} </b> Amount Withdrawn: <i>- ${transaction.amount}.00 </i>
                  </strong>

                  <DeleteBtn onClick={() => deleteTransaction(transaction.transaction_id)} />
                </ListItem>
              );
            })}
          </List>
        ) : (
            // This will render when there are no transactions to be displayed
            <p>Add a Transaction Below!</p>
          )}
      </div>

            {/* Add a Transaction form! */}
      <hr />
      <form>
        <div className="col-md-6 offset-md-3">
        <br />
          <h4>Make a Withdrawl</h4>
          <br />
          
                      {/* To Do: Currently we do not have this functionality set up (transaction child_id is automatically "1") */}
          {/* <h6>Which Child are you Withdrawing Funds From:</h6>
          <select className="form-control">
            <option>Ben</option>
            <option>Jack</option>
          </select>
          <br /> */}
          <h6>Date:</h6>
            <div className="form-group">
            <input type="Date" className="form-control" onChange={e => setDate(e.target.value)} id="date" placeholder="03/07/2020"></input>
          </div>
            <h6>Comment for Transaction:</h6>
            <div className="form-group">
            <input type="Comment" className="form-control" onChange={e => setComment(e.target.value)} id="comment" placeholder="Chipotle"></input>
          </div>
          <br />
          <div className="form-group">
            <h6>Amount Withdrawn (In Dollars):</h6>
            <input type="Amount" className="form-control" onChange={e => setAmount(e.target.value)} id="transactionAmount" placeholder="7"></input>
          </div>
          {/* To Do: Change Button Color to match color schema */}
          <button type="submit" onClick={addTransaction} className="btn btn-primary">Submit</button>
        </div>
      </form>
      <br />
      <br />

      {/* To Do: Footer Code, do we want this to be a component? */}
      <nav className="footer parentFooter" style={{ backgroundColor: "#20638C" }}>
        <a className="navbar-brand" href="/parent"> <div className="footer-copyright text-white font-small"> © 2020 Copyright: Nuggets</div>
          <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img>
        </a>
      </nav>
    </div>
  )
};

export default ManageFundsForm