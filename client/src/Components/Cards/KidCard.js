import React from 'react'
import { useHistory } from 'react-router-dom';


const KidCard = () => {

  const history = useHistory();
      
  function handleClick1() {
    history.push("/transactions");
  }

  function handleClick2() {
    history.push("/goals");
  }



    return(
    
      <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
      <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title child_Name">Ben</h5>
    <h4 className="card-text">Balance</h4>
    <h3 className="card-text child_balance">$10</h3>
    <button type="button" onClick={handleClick1} class="btn btn-primary">View Transactions</button>
    {/* <button type="button" onClick={handleClick2} class="btn btn-primary">View Goals</button> */}
    </div>

    <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."></img>
    <div className="card-body">
    <h5 className="card-title child_Name">Jack</h5>
    <h4 className="card-text">Balance</h4>
    <h3 className="card-text child_balance">$30</h3>
    <button type="button" onClick={handleClick1} class="btn btn-primary">View Transactions</button>
    {/* <button type="button" onClick={handleClick2} class="btn btn-primary">View Goals</button> */}

  </div>

</div>

</div>
<div class="col-md-4"></div>
</div>
</div>
    )
}

export default KidCard