import React, { useState, useEffect } from "react";
import axios from 'axios'
import { List, ListItem } from "../List/index";
import DeleteBtn from "../DeleteBtn/index";

const ManageChoresForm = () => {
  // const [chore , setChore] = React.useState([])
  // const [amount , setAmount] = React.useState()

  const [chores, setChores] = useState()
  const [amount, setAmount] = useState()
  const [choresArray, setChoresArray] = useState([])

  // const [formObject, setFormObject] = useState({})


  // Load all chores and store them with setChore
  useEffect(() => {
    loadChores()
  }, [])

  // Loads all chores and sets them to chores
  function loadChores() {
    axios.get("/api/chores/")
      .then(res =>
        setChoresArray(res.data),
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads chores from the db
  function deleteChore(chores_id) {
    var oldChore = {
      id: chores_id,
      chore_name: chores,
      amount: amount,
      admin_id: 1,
    };

    console.log("this is the old chore" + oldChore)

    axios.get("/api/chores/:id", oldChore).then(
      function () {
        console.log("This is the result", oldChore)
      })

};

  function addChore(event) {
    // Send the GET request.
    var newChore = {
      chore_name: chores,
      amount: amount,
      admin_id: 1,
    };

    console.log(newChore)

    axios.post("/api/chores/", newChore).then(
      function () {
        console.log("This is the result", newChore)
      })
  }

  return (
    <>
      <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
        <a className="navbar-brand" href="/parent" style={{ color: "white" }}>
          <img src="images/logo.png" width="100px" className="d-inline-block align-top" alt="Logo"></img>
          Chore Enforement Officer
        </a>
      </nav>

      <div className="col-md-8 offset-md-2">
        <br></br>
        <br></br>

        {choresArray.length ? (
          <List>
            {choresArray.map(chore => {
              return (
                <ListItem key={chore.chores_id}>

                  <strong>
                    {chore.chore_name} For: $ {chore.amount}
                  </strong>

                  <DeleteBtn onClick={() => deleteChore(chore.chores_id)} />
                </ListItem>
              );
            })}
          </List>
        ) : (
            <h3>No Results to Display</h3>
          )}

      </div>

      <form>
        <div className="col-md-6 offset-md-3">
          <br></br>
          <br></br>

          <h3>Add Chores Below</h3>
          <div className="form-group">
            <h4>Chore Name</h4>
            <input type="Name" className="form-control" onChange={e => setChores(e.target.value)} id="choreName"></input>
          </div>
          <br></br>
          <br></br>
          <div className="form-group">
            <h4>Amount</h4>
            <input type="Amount" className="form-control" onChange={e => setAmount(e.target.value)} id="choreAmount"></input>
          </div>
          <button type="submit" onClick={addChore} className="btn btn-primary">Submit</button>
        </div>
      </form>
      <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
        <a className="navbar-brand" href="/parent">
          <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img>
        </a>
      </nav>

    </>
  )
};

export default ManageChoresForm