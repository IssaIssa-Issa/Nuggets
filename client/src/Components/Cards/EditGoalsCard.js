import React from 'react'
import { useHistory } from 'react-router-dom';

const EditGoalsCard = () => {

  const history = useHistory();
      
  function handleClick() {
    history.push("/child");
  }

////Need AJAX --- PUT CODE HERE

    return(
    
      <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h1 className="card-text">Add Goal</h1>
    <button type="button" onClick={handleClick} class="btn btn-primary">Add Goal</button>

  </div>

</div>

    )
}

export default EditGoalsCard