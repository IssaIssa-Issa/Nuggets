import React from 'react'
import { useHistory } from 'react-router-dom';

const ChoreCard = () => {

  const history = useHistory();
      
  function handleClick() {
    history.push("/viewallchores");
  }


    return(
    
      <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h1 className="card-text">Chores</h1>
    <button type="button" onClick={handleClick} class="btn btn-primary">See Chores</button>

  </div>

</div>

    )
}

export default ChoreCard