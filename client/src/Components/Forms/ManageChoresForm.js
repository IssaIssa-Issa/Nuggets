import React from 'react'
import axios from 'axios'

const ManageChoresForm = () => {
const [chore , setChore] = React.useState()
const [amount , setAmount] = React.useState()

function addChore(event) {
    // event.preventDefault();

    // Send the GET request.
    var newChore = {
      chore_name: chore,
      amount: amount,
      admin_id: 1,

    };
console.log(newChore)
    axios.post("/api/chores/", {
      type: "POST",
      data: newChore,
      url: "/api/chores/"
    }).then(
      function () {
        console.log("This is the result", newChore)
      })
    }

    return (
      <>
        <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
          <a className="navbar-brand" href="#" style={{ color: "white" }}>
            <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""></img>
            Chore Enforement Officer
  </a>
        </nav>

        <div className="col-md-8 offset-md-2">
          <br></br>
          <br></br>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Chore</th>
                <th scope="col">Amount</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Empty Dishwaser</td>
                <td>$1.00</td>
                <td scope="col"><button type="button" className="btn btn-success">Delete</button></td>
              </tr>
              <tr>
                <td>Take out Trash</td>
                <td>$2.00</td>
                <td scope="col"><button type="button" className="btn btn-success">Delete</button></td>
              </tr>
              <tr>
                <td>{chore}</td>
                <td>{amount}</td>
                <td scope="col"><button type="button" className="btn btn-success">Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <form>
          <div className="col-md-6 offset-md-3">
            <br></br>
            <br></br>

            <h3>Add Chores</h3>
            <div className="form-group">
              <h3>Chore Name</h3>
              <input type="Name" onChange={e => setChore(e.target.value)} className="form-control" id="choreName"></input>
            </div>
            <br></br>
            <br></br>
            <div className="form-group">
              <h3>Amount</h3>
              <input type="Amount" onChange={e => setAmount(e.target.value)}className="form-control" id="ChoreAmount"></input>
            </div>
            <button type="submit" onClick={addChore} className="btn btn-primary">Submit</button>
          </div>
        </form>
        <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
          <a className="navbar-brand" href="#">
            <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img>
          </a>
        </nav>

      </>
    )
  };

  export default ManageChoresForm