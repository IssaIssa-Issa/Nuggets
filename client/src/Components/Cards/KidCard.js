import React from 'react'
import { useHistory } from 'react-router-dom';


const KidCard = (props) => {

  const history = useHistory();
      
  function handleClick1() {
    history.push("/transactions");
  }

  function handleClick2(props) {
    history.push("/Goals");
  }
    return(
  <div className="card" style={{width: 400 + "px"}}>
    <div className="card-body">
    {/* To Do: Get image source as part of the db */}
  <img src="images/computer.png" style={{width: 200 + "px"}} className="card-img-top" alt="computer"></img>
    <h2 className="card-title child_Name">{props.name}</h2>
    <h6 className="card-text child_balance">Balance: ${props.balance}</h6>
    <button type="button" onClick={handleClick1} style={{margin: 10 + "px"}}className="btn btn-primary">View Transactions</button>
    <button type="button" onClick={handleClick2} style={{margin: 10 + "px"}}className="btn btn-primary">View Goals</button>
    </div>
    </div>
    )
}

export default KidCard