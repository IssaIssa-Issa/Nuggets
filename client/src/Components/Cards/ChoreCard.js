import React from 'react'
import { useHistory } from 'react-router-dom';
import "../Containers/style.css"

const ChoreCard = () => {

  const history = useHistory();
      
  function handleClick() {
    history.push("/viewallchores");
  }


    return(
    
      <div className="circleRed">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


    <button type="button" onClick={handleClick} class="btn btn-primary KidButton">View Chores</button>

  </div>

    )
}

export default ChoreCard