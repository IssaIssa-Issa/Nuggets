import React from 'react'
import { useHistory } from 'react-router-dom';

const ManageFundsBtn = () => {
        const history = useHistory();
      
        function handleClick() {
          history.push("/managefundsform");
        }
      
    return(
<button type="button" onClick={handleClick} class="btn btn-success">Manage Funds</button>


    )};
    export default ManageFundsBtn