import React from 'react'
import { useHistory } from 'react-router-dom';
import "../Containers/style.css"



const GoalCard = () => {


  const history = useHistory();
      
  function handleClick() {
    history.push("/goals");
  }


    return(
            <div className="circleBlue">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
    
        <button type="button" onClick={handleClick} class="btn btn-primary KidButton">View Goals</button>
    
      </div>
    

    )
}

export default GoalCard