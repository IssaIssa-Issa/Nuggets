import React from 'react'
import { useHistory } from 'react-router-dom';
import "../Containers/style.css"



const GoalCard = () => {


  const history = useHistory();
      
  function handleClick() {
    history.push("/goals");
  }


    return(
    
      <div className="card elipse5" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h1 className="card-text">Goals</h1>
    <button type="button" onClick={handleClick} class="btn btn-primary">See Goals</button>

  </div>

</div>

    )
}

export default GoalCard