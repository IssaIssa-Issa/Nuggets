import React, { useState, useEffect } from "react";
import axios from 'axios'
import { List, ListItem } from "../List/index";

const ViewAllChores = () => {
  let [choresArray, setChoresArray] = useState([])
  const [date, setDate] = useState()
  useEffect(() => {
    loadChores()
    updateChore()
  }, [])


  // Loads all chores
  function loadChores() {
    axios.get("/api/chores/")
      .then(res => {
        var activeChores = []
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].date_completed === null) {
            activeChores.push(res.data[i]);
            }
        }
       setChoresArray(activeChores)
      }

      )
      .catch(err => console.log(err));
  };



  function updateChore(chores_id) {
    console.log(date)
    console.log(chores_id)
    axios.put(`/api/chores/${chores_id}`, { date_completed: date }).then(res => {
      console.log('saved successfully')
    }
    ).catch(err => console.log(err));
  }
  return (
    <div className = "childContainer">
      {/* NavBar ToDo: Make this a component */}
      <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
        <a className="navbar-brand" href="/child" style={{ color: "white" }}>
          <img id="childFooterLogo" src="images/logo.png" width="100px" className="d-inline-block align-top" alt="Logo"></img></a>
        <a href="/"><button className="btn btn-success">Log Out</button></a>
      </nav>
      <div className="container">
        <div className="col-md-8 offset-md-2">
          <br />
          <br />
          <h3>Available Chores</h3>
            <h4>Mark Chores Complete</h4>
          {/* Goes through Chores Array and lists out each chore. Chore name and amount are displayed and a delete button is created for each chore */}
          {choresArray.length ? (
            <List>
              {choresArray.map(chore => {
                return (
                  <ListItem key={chore.chores_id}>
                    <h6 className= "choretxt">
                      <b> {chore.chore_name} </b> for: <i> ${chore.amount}.00 </i>
                    </h6>
                    <h6>Date Completed:</h6>
                    <input type="Date" onChange={e => setDate(e.target.value)} className="form-control" id="date"></input>
                    <button type="button" onClick={() => updateChore(chore.chores_id)} className="btn btn-success">✔ Chore Done!</button>
                 <br />
                  </ListItem>

                );
              })}
            </List>
          ) : (
              // This will render when there are no chores to be displayed
              <p>No chores. Go read a book!</p>
            )}
        </div>
      </div>
{/* Footer ToDo: Make this into Component */}
<nav className="footer parentFooter" style={{ backgroundColor: "white" }}>
        <a className="navbar-brand" href="/parent"> <div className="footer-copyright text-gray font-small" style={{"font-size": 15 + "px"}}> © 2020 Copyright: Nuggets</div>
        </a>
      </nav>
    </div>
  )
}
export default ViewAllChores;