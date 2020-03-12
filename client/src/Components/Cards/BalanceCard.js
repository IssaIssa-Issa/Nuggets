import React from 'react'
import { useHistory } from 'react-router-dom';
import "../Containers/style.css"

const BalanceCard = () => {

        const history = useHistory();
      
        function handleClick() {
          history.push("/transactions");
        }
      
  

    return(
    <div className="circleOrange">
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    <button type="button" onClick={handleClick} className="btn btn-primary KidButton">Balance</button>
  </div>
    )
}

export default BalanceCard