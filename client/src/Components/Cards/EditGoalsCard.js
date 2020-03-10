import React from 'react'
import { useHistory } from 'react-router-dom';
import "../Containers/style.css"

const EditGoalsCard = () => {

  const history = useHistory();
      
  function handleClick() {
    history.push("/child");
  }


    return(
    
      <div className="circleOrange">
      <br></br>
      <br></br>
      <br></br>
      <br></br>


    <button type="button" onClick={handleClick} class="btn btn-primary KidButton">Add Goal</button>

  </div>

    )
}

export default EditGoalsCard