import React, { useState, useEffect } from "react";
import axios from 'axios'
import { List, ListItem } from "./List/index";

const ViewAllChores = () => {

  const [choresArray, setChoresArray] = useState([])


  useEffect(() => {
    loadChores()
  }, [])

    // Loads all chores
    function loadChores() {
      axios.get("/api/chores/")
        .then(res =>
          setChoresArray(res.data),
        )
        .catch(err => console.log(err));
    };




  
  return (

      <div>
        {/* Goes through Chores Array and lists out each chore. Chore name and amount are displayed and a delete button is created for each chore */}
        {choresArray.length ? (
          <List>
            {choresArray.map(chore => {
              return (
                <ListItem key={chore.chores_id}>

                  <strong>
                    <b> {chore.chore_name} </b> for: <i> ${chore.amount}.00 </i>
                  </strong>
                  <input type="Date" className="form-control" id="date"></input>
                  <button type="button" className="btn btn-success">Completed</button>
                </ListItem>
              );
            })}
          </List>
        ) : (
            // This will render when there are no chores to be displayed
            <p>No chores. Go read a book!</p>
          )}
      </div>
  )
}

export default ViewAllChores;