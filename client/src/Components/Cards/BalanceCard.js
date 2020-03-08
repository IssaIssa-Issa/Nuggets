import React from 'react'
import { useHistory } from 'react-router-dom';
import "../Containers/style.css"

const BalanceCard = () => {

        const history = useHistory();
      
        function handleClick() {
          history.push("/transactions");
        }
      
  

    return(
    
      <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h4 className="card-text">Balance</h4>
    <h3 className="card-text child_balance">$10</h3>
    <button type="button" onClick={handleClick} class="btn btn-primary">See Transactions</button>

  </div>

</div>

    )
}

export default BalanceCard